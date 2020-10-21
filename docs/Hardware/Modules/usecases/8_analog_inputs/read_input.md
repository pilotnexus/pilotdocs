### Example for the 8 Analog Inputs Module

#### Prerequisites

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurateley in place.


#### Basics

There are two versions of the module. 
One with a pinheader (AI8H001), the other with a pluggable spring-cage connector (AI8P001)
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


Now the 8 ANALOG INPUT pins are available on the Linux host.

    cat /sys/class/gpio/gpio55/value 
	cat /sys/class/gpio/gpio56/value 
	cat /sys/class/gpio/gpio57/value 
	cat /sys/class/gpio/gpio58/value 
	cat /sys/class/gpio/gpio59/value 
	cat /sys/class/gpio/gpio60/value 
	cat /sys/class/gpio/gpio61/value 
	cat /sys/class/gpio/gpio62/value

They all should read "0" unless you provide a voltage higher than 0 and lower or equal to 5V on an Input pin.
The ADC features a 12 bit resolution so you will read a value betwwen 0 and  4095.

For testing purposes you can connect a jumper wire between the port on the left (+5V) and any of the 8 INPUT pins.
The file will read 4095. You can put a Zener diode or a resistor in between to read a lower value because of the voltage drop on the part.