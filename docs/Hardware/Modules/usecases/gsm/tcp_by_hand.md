### Sending an receiving data with the GSM Module

#### Prerequisites

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurately in place.


You need to install an *GSM antenna* in order to send and receive data from the module.


![antenna](/images/GSM/antenna.jpg "GSM antenna")




You need a *SIM card* that supports a 2G network.
Most networks in Europe support this standard, but there are different networks that do not support this.
Ask your mobile service provider if the SIM card is compatible with the 2G cellular network.






#### Basics

Plug in in the module and enable it.
Run *sudo pilot setup* to configure the pilot motherboard and load the matching kernel driver.
You should see the GSM module in the  list.
Once installed you can run *pilot module* to get an overview of what can be done with the installed modules.

First enable the module by running 

    echo 1 > /proc/pilot/module1/enable_gsm

/module1/ might be different depending on the slot you inserted your GPS module.

The module is now enabled and you should be able to communicate with it over the associated serial device.

A full documentation on all available AT commands is available in the AT commands datasheet for the SIM800 module.

You can get a copy [here](/docs/docs/sim800_series_at_command_manual_v1.01.pdf "The AT reference of the SIM800 module") 





#### Raw access of the modules output

The module operates with AT commands that you can access on the serial interface that is available on your linux host system.
When plugged into slot 1 the device is called /dev/ttyP0.

To access the raw data you can use the *screen* command or another terminal emulator of your choice like minicom.
The module sends its data at 9600 Baud.
Connect to the module with the command *screen /dev/ttyP0 9600*

The module does display data only when you ask for it.
To check wether it is operational type the command *AT* and press Enter.
You will usually not see your own input.
The module should respond with *OK*








#### Send and receive data over TCP


First we need to configure the GPRS part

    AT+CGATT=1
    AT+CIPMUX=0
    AT+CSTT="APN","USER","PASS"
    AT+CIICR
    AT+CIFSR
    AT+CIPSHUT

Type one command after the other they all should be acknowledged with OK AT+CIFSR will show you an IP address.
Now we can connect to a server on TCP port 1337 like this

    AT+CIPSTART="TCP","yourserver.com","1337"


When you have an internetreachable service running on port 1337 you are now able to receive and send data.
To try this start a listening TCP server on port 1337 on a machine connected to the internet.

    nc -l 1337

Open a connection with the AT+CIPSTART command as shown above.
When you enter text at the server it will appear on the GSM side.
To send data to the server you type

    AT+CIPSEND=<number of bytes>
    
a console opens and you can enter the number of bztes specified above to send to the socket.

Voila you transmitted data by hand.


---

You can leave screen by pressing

*Ctrl + a* than *k* to terminate the session

