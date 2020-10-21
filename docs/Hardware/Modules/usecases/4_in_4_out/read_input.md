### Example for the Demoboard - Reading the 4 INPUT pins

#### Prerequisites

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurateley in place.


#### Basics

The board comes with 8 leds, of which 4 can be controlled in sofware diectly from your single board computer.

The leds are attached to the 4 OUTPUT pins labeled O0 to O3

To switch on the led connected to O0 you need to enable the GPIO chip pin and write a positive value to the output filedescriptor.

The module exposes 10 Pins

The left most being +5V followed by GND and then 4 Inouts labeled
I0, I1, I2  and I3

Those ports are on the same pins as the buttons.
So you can either trigger some event with external inouts or with a button press.

Those 4 Pins can be used to attch custom buttons or other triggers like reed contacts, pir sensors or other external electronics.


#### Setup

To configure the inputs you need to enable the GPIOs the same way you would enable the 4 buttons.

When the module is plugged in slot 1 the GPIO offset for the outputs is 55

    echo 55 > /sys/class/gpio/export  
	echo 56 > /sys/class/gpio/export  
	echo 57 > /sys/class/gpio/export  
	echo 58 > /sys/class/gpio/export 



#### Usage


Now the 4 INPUT pins are available on the Linux host.

    cat /sys/class/gpio/gpio55/value
    cat /sys/class/gpio/gpio56/value
    cat /sys/class/gpio/gpio57/value 
    cat /sys/class/gpio/gpio58/value       


They all should read "0" unless you provide a voltage of 3.3V or higher to those ports.
They can handle any positive voltage up to 12V.

For testing purposes you can connect a jumper wire between the port on the left (+5V) and any of the 4 INPUT pins.
The led of this port will light up and you will read back a "1" from the corresponding gpio file as illustrated above.