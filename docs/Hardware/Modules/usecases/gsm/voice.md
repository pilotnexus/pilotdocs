### Making a voice call with the GSM Module

#### Prerequisites

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurately in place.


You need to install an *GSM antenna* in order to send and receive data from the module.


![antenna](/images/GSM/antenna.jpg "GSM antenna")




You need a *SIM card* that supports a 2G network.
Most networks in Europe support this standard, but there are different networks that do not support this.
Ask your mobile service provider if the SIM card is compatible with the 2G cellular network.


You need an [8 Ohm speaker](https://uk.farnell.com/pro-signal/52-130/lautsprecher-rund-mini-8ohm-0/dp/4262323 "Speaker")  and an [electret condenser microphone
](https://uk.farnell.com/kingstate/kecg2740pbj/elektretmikrofon-mini/dp/1299885 "Microphone")   


Connect the speaker and the microphone as shown in the picture below.

![microphone and speaker](/images/GSM/mic_spk.jpg "microphone and speaker wired")




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





#### Make a call

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


### Actually making the call

To make a phone call type:

    ATD+436641234567;

The trailing semicolon is very important, or you will get a cryptic error "NO CARRIER"

If you did everything right the modem responds with OK and you will hear a ringtone on the speaker.

To hang up you can type *ATH* in the terminal


### Receiving an incoming call


When you call your GSM module it will produce a ringtone on the speaker that is also configurable.

You can configure the ringtone with the command 
    AT+CALS=&lt;0-19&gt;

0 means NO ringtone and 1 to 19 is a different ringtone.
To test them you can type:

    AT+CALS=4,1

This will play the 4th ringtone.
To disable the tone again you can type

    AT+CALS=4,0


When a call is incoming the modem outputs 

    RING
    +CLIP: "+436501234567",145,"",0,"",0


To pick up the call type
    ATA

The modem responds with *OK* as usual.


To hang up type 
    ATH


---

You can leave screen by pressing

*Ctrl + a* than *k* to terminate the session

