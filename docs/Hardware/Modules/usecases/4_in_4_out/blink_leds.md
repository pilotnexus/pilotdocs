### Example for the Demoboard - How to blink leds

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurateley in place.

The board comes with 8 leds, of which 4 can be controlled in sofware diectly from your single board computer.

The leds are attached to the 4 OUTPUT pins labeled O0 to O3

To switch on the led connected to O0 you need to enable the GPIO chip pin and write a positive value to the output filedescriptor.

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


Now we can turn the leds on

    echo 1 > /sys/class/gpio/gpio59/value
    echo 1 > /sys/class/gpio/gpio60/value
    echo 1 > /sys/class/gpio/gpio61/value
    echo 1 > /sys/class/gpio/gpio62/value


.. and off

    echo 0 > /sys/class/gpio/gpio59/value
    echo 0 > /sys/class/gpio/gpio60/value
    echo 0 > /sys/class/gpio/gpio61/value
    echo 0 > /sys/class/gpio/gpio62/value




### Fun with Leds



Now that all basics are understood, we can make a nice little larson scanner in bash :)

    while [ true ] ; do
     
    echo 1 > /sys/class/gpio/gpio59/value;
    sleep 0.1;
    echo 0 > /sys/class/gpio/gpio59/value;
    echo 1 > /sys/class/gpio/gpio60/value;
    sleep 0.1;
    echo 0 > /sys/class/gpio/gpio60/value;   
    echo 1 > /sys/class/gpio/gpio61/value;
    sleep 0.1;
    echo 0 > /sys/class/gpio/gpio61/value;     
    echo 1 > /sys/class/gpio/gpio62/value;
    sleep 0.1;   
    echo 0 > /sys/class/gpio/gpio62/value;   

    echo 1 > /sys/class/gpio/gpio61/value;
    sleep 0.1;
    echo 0 > /sys/class/gpio/gpio61/value;
    echo 1 > /sys/class/gpio/gpio60/value;
    sleep 0.1;
    echo 0 > /sys/class/gpio/gpio60/value;   
    echo 1 > /sys/class/gpio/gpio59/value;
    sleep 0.1;
    echo 0 > /sys/class/gpio/gpio59/value;     


    done;   