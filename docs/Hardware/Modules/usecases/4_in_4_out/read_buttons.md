### Example for the Demoboard - Reading the 4 buttons

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurateley in place.

The board comes with 4 buttons.

There are 4 leds attached to the buttons, they light up when you predd a button.
You can also register the button pressed from within the Linux system.


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


They all should read "0" unless you press the button, then you would read "1"
