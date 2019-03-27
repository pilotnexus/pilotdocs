### Example for the 8 Digital Inputs Module

#### Prerequisites

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurateley in place.


#### Basics

There are two versions of the module. 
One with a pinheader (I8H001), the other with a pluggable spring-cage connector (I8P001)
The functionality in software is identical.

When the driver is configured, you can use the Inputs like regular GPIOs on the Raspberry Pi. If it is the first GPIO module on the Pilot the base address would be 55. So the GPIOs are 55-62 (I0-I7).

First, connect the module and configure it using the command 'pilot setup'.



#### Exporting the IOs


You can get information on what can be done with the module by typing 'pilot module' in the console.


To configure the inputs you need to enable the GPIOs.
When the module is plugged in slot 1 the GPIO offset for the outputs is 55.
This offset will be different if it is plugged into another slot.


    echo 55 > /sys/class/gpio/export 
	echo 56 > /sys/class/gpio/export  
	echo 57 > /sys/class/gpio/export  
	echo 58 > /sys/class/gpio/export 
	echo 59 > /sys/class/gpio/export  
	echo 60 > /sys/class/gpio/export 
	echo 61 > /sys/class/gpio/export 
	echo 62 > /sys/class/gpio/export



#### Usage


Now the 8 INPUT pins are available on the Linux host.

    cat /sys/class/gpio/gpio55/value 
	cat /sys/class/gpio/gpio56/value 
	cat /sys/class/gpio/gpio57/value 
	cat /sys/class/gpio/gpio58/value 
	cat /sys/class/gpio/gpio59/value 
	cat /sys/class/gpio/gpio60/value 
	cat /sys/class/gpio/gpio61/value 
	cat /sys/class/gpio/gpio62/value

They all should read "0" unless you provide a voltage of 3.3V or higher to those ports.
They can handle any positive voltage up to 12V.

For testing purposes you can connect a jumper wire between the port on the left (+5V) and any of the 8 INPUT pins.
The led of this port will light up and you will read back a "1" from the corresponding gpio file as illustrated above.