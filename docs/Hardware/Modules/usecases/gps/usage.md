### Example for the GPS Module

#### Prerequisites

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurately in place.



#### Basics

Plug in in the module and enable it.
Run *sudo pilot setup* to configure the pilot motherboard and load the matching kernel driver.
You should see the GPS module in the  list.
Once installed you can run *pilot module* to get an overview of what can be done with the installed modules.

First enable the module by running 

    *echo 1 > /proc/pilot/module1/enable_gps*

/module1/ might be different depending on the slot you inserted your GPS module.

Now a green led in the bottom left corner of the module will start blinking .
This led indicates that the module is powered and currently scanning for sattelites.




#### Raw access of the modules output

The module outputs NMEA formated data that you can access on the serial interface that is available on your linux host system.
When plugged into slot 1 the device is called /dev/ttyP0.
To access the raw data you can use the *screen* command or another terminal emulator of your choice like minicom.
The module sends its data at 9600 Baud.
Connect to the module with the command *screen /dev/ttyP0 9600*

You will now receive updated information once a second.
The format of the data will look like this

    $GPGGA,001019.799,,,,,0,0,,,M,,M,,*46
    $GPGSA,A,1,,,,,,,,,,,,,,,*1E
    $GPRMC,001019.799,V,,,,,0.00,0.00,060180,,,N*4C
    $GPVTG,0.00,T,,M,0.00,N,0.00,K,N*32

Once you see that data is available close the terminal again so other processes can acccess the data.
You can leave screen by pressing

*Ctrl + a* than *k* to terminate the session


#### Configuring GPSD

The *gpsd* is a linux daemon that provides location information to all userland applications and it can be connected to a serial attached GPS mouse.
To use the pilot GPS module this way install the gpsd with these commands

    sudo apt-get update
    sudo apt-get install gpsd gpsd-clients python-gps

    sudo systemctl stop gpsd.socket
    sudo systemctl disable gpsd.socket

Now that you installed the gpsd successfully you can start it.
Run *sudo gpsd /dev/ttyP0 -F /var/run/gpsd.sock*


  
#### A nice python integration  


Save the following script to a file called "my_gps.py" and run it using python 2.7x




 
```python
#! /usr/bin/python
# Written by Dan Mandle http://dan.mandle.me September 2012
# License: GPL 2.0
 
import os
from gps import *
from time import *
import time
import threading
 
gpsd = None #seting the global variable
 
os.system('clear') #clear the terminal (optional)
 
class GpsPoller(threading.Thread):
  def __init__(self):
    threading.Thread.__init__(self)
    global gpsd #bring it in scope
    gpsd = gps(mode=WATCH_ENABLE) #starting the stream of info
    self.current_value = None
    self.running = True #setting the thread running to true
 
  def run(self):
    global gpsd
    while gpsp.running:
      gpsd.next() #this will continue to loop and grab EACH set of gpsd info to clear the buffer
 
if __name__ == '__main__':
  gpsp = GpsPoller() # create the thread
  try:
    gpsp.start() # start it up
    while True:
      #It may take a second or two to get good data
      #print gpsd.fix.latitude,', ',gpsd.fix.longitude,'  Time: ',gpsd.utc
 
      os.system('clear')
 
      print
      print ' GPS reading'
      print '----------------------------------------'
      print 'latitude    ' , gpsd.fix.latitude
      print 'longitude   ' , gpsd.fix.longitude
      print 'time utc    ' , gpsd.utc,' + ', gpsd.fix.time
      print 'altitude (m)' , gpsd.fix.altitude
      print 'eps         ' , gpsd.fix.eps
      print 'epx         ' , gpsd.fix.epx
      print 'epv         ' , gpsd.fix.epv
      print 'ept         ' , gpsd.fix.ept
      print 'speed (m/s) ' , gpsd.fix.speed
      print 'climb       ' , gpsd.fix.climb
      print 'track       ' , gpsd.fix.track
      print 'mode        ' , gpsd.fix.mode
      print
      print 'sats        ' , gpsd.satellites
 
      time.sleep(5) #set to whatever
 
  except (KeyboardInterrupt, SystemExit): #when you press ctrl+c
    print "\nKilling Thread..."
    gpsp.running = False
    gpsp.join() # wait for the thread to finish what it's doing
  print "Done.\nExiting."
```