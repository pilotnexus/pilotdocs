### Internet Access over GPRS

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


---

You can leave screen by pressing

*Ctrl + a* than *k* to terminate the session





#### Setup PPP tunnel


To access the internet over GPRS you need to configure PPP and chat scripts like back in the old days when we still had dialup modems.



Install the system utilities

    sudo apt-get update 
    sudo apt-get install ppp 

Change directory to /etc/ppp/peers

Create a file called "gprsinternet" and paste these lines


    connect "/usr/sbin/chat -v -f /etc/chatscripts/gprs -T internet"
    /dev/ttzP0
    115200
    noipdefault
    usepeerdns
    defaultroute
    persist
    noauth
    nocrtscts
    local

Next create the file /etc/chatscripts/gprs and paste these lines

    ABORT		BUSY
    ABORT		VOICE
    ABORT		"NO CARRIER"
    ABORT		"NO DIALTONE"
    ABORT		"NO DIAL TONE"
    ABORT		"NO ANSWER"
    ABORT		"DELAYED"
    ABORT		"ERROR"

    ABORT		"+CGATT: 0"

    ""		AT
    TIMEOUT		12
    OK		ATH
    OK		ATE1

    OK		AT+CGDCONT=1,"IP","\T","",0,0
    OK		ATD*99#
    TIMEOUT		22
    CONNECT		""


This is all you need to to to enable a PPP link ofer GPRS.
To connect to the Internet start the connection with the command

    pon gprsinternet

You can see if everything works by running 
    tail -f /var/log/syslog.

Also  *ifconfig* should display some information on the newly created PPP interface that looks like this:

    ppp0: flags=4305<UP,POINTOPOINT,RUNNING,NOARP,MULTICAST>  mtu 1500
        inet 10.170.75.132  netmask 255.255.255.255  destination 10.64.64.64
        ppp  txqueuelen 3  (Point-to-Point Protocol)
        RX packets 567  bytes 107736 (105.2 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 986  bytes 445004 (434.5 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0


To disconnect run

    poff gprsinternet

### Permanent Internet connection on bootup

Once your setup works, you might want to connect to the internet as soon as the device is turned on.
To enable the GPRS datalink by default add the following lines in the file */etc/network/interfaces*

    auto gprsinternet
    iface gprsinternet inet ppp
	    provider gprsinternet


### Example MQTT

One of the more commonly used examples of connecting embedded devices to the internet is using MQTT to transmit sensordata.

To give this a try install the mqtt client software 
    apt-get install mosquitto-clients

Test your setup with the online MQTT broker client you can find [here](http://www.hivemq.com/demos/websocket-client/ "Online MQTT broker") 

Click the connect button and than *SUBSCRIBE* enter this resource *hump/#*


Now open your shell again and type 

    mosquitto_pub -h broker.mqttdashboard.com -m "hallo hallo" -t "hump/dump"


You should see the message "hallo hallo" on the resource "hump/dump" appear in real time.
Please bear in mind that this information is not private and visible to everybody who connects to this open MQTT broker.
This is very useful for debugging but should not be used for production environments.