### Sending SMS with the GSM Module

#### Prerequisites

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurately in place.


You need to install an *GSM antenna* in order to send and receive data from the module.


![alt text](/images/GSM/antenna.jpg "GSM antenna")




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





#### Send a SMS

Now that you can talk to the GSM modem you need to enable the SIM card by  entering the PIN.

    AT+CPIN=1234


Replace 1234 with your actual PIN. Usually you get 3 tries before the SIM is locked and you need to enter the PUK code in order to unlock the SIM again.
So be careful there.


When you meda no mistake the module is now connected to the GSM network

    OK
    +CPIN: READY
    Call Ready
    SMS Ready

You can check which network we are connected to by typing

    AT+COPS?

The module should respond with something like this 

    +COPS: 0,0,"A1"


### Actually sending the SMS


To send an SMS type:


    AT+CMGF=1
    OK
    AT+CMGS="+436641234567"
    > hello world! <CTRL+Z>
    +CMGS: 1


AT+CMGF=1 configures the modem for SMS textmode

AT+CMGS="&lt;number&gt;" sets the destination phone number, the quotes are important. 

&lt;CTRL+Z&gt; terminates the input

+CMGS: 	&lt;some number&gt; means the SMS was successfully send and saved internally at slot number #


---

You can leave screen by pressing

*Ctrl + a* than *k* to terminate the session

