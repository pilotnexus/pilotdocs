### Example for the Demoboard - Reading the 4 INPUT pins


The module exposes 10 Pins

The left most being +5V followed by GND and then 4 Inouts labeled
I0, I1, I2  and I3

Those ports are on the same pins as the buttons.
So you can either trigger some event with external inouts or with a button press.

Those 4 Pins can be used to attch custom buttons or other triggers like reed contacts, pir sensors or other external electronics.

To configure the inputs you need to enable the GPIOs the same way you would enable the 4 buttons.

When the module is plugged in slot 1 the GPIO offset for the outputs is 55

    echo 55 > /sys/class/gpio/export  
	echo 56 > /sys/class/gpio/export  
	echo 57 > /sys/class/gpio/export  
	echo 58 > /sys/class/gpio/export 

Now the 4 INPUT pins are available on the Linux host.

    cat /sys/class/gpio/gpio55/value
    cat /sys/class/gpio/gpio56/value
    cat /sys/class/gpio/gpio57/value 
    cat /sys/class/gpio/gpio58/value       


They all should read "0" unless you provide a voltage of 3.3V or higher to those ports.
They can handle any positive voltage up to 12V.

For testing purposes you can connect a jumper wire between the port on the left (+5V) and any of the 4 INPUT pins.
The led of this port will light up and you will read back a "1" from the corresponding gpio file as illustrated above.