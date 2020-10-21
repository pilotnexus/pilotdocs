### Example for the Demoboard - Using the 4 OUTPUT pins



#### Prerequisites

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurateley in place.


#### Basics

The board comes with 4 OUTPUT pins.
They are labeled O0,O1,O2 and O3





#### Setup

To switch on the pins you need to enable the GPIO chip and write a positive value to the output filedescriptor.

When the module is plugged in slot 1 the GPIO offset for the outputs is 59

    echo 59 > /sys/class/gpio/export  
	echo 60 > /sys/class/gpio/export  
	echo 61 > /sys/class/gpio/export  
	echo 62 > /sys/class/gpio/export 

Now the 4 OUTPUT pins are available on the Linux host.

Next we must define them as outputs

    echo out > /sys/class/gpio/gpio59/direction
    echo out > /sys/class/gpio/gpio60/direction
    echo out > /sys/class/gpio/gpio61/direction
    echo out > /sys/class/gpio/gpio62/direction

#### Usage

Now we can turn the pin on

    echo 1 > /sys/class/gpio/gpio59/value
    echo 1 > /sys/class/gpio/gpio60/value
    echo 1 > /sys/class/gpio/gpio61/value
    echo 1 > /sys/class/gpio/gpio62/value


.. and off

    echo 0 > /sys/class/gpio/gpio59/value
    echo 0 > /sys/class/gpio/gpio60/value
    echo 0 > /sys/class/gpio/gpio61/value
    echo 0 > /sys/class/gpio/gpio62/value



The leds on those ports are also turned on when you enable the pin.

You can use these pins to control external hardware like a small motor, leds, a buzzer or other external electronic components.

The pin outputs +5V when high and is at the ground potential when low.


