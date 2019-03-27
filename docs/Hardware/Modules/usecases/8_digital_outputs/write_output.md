### Example for the 8 Digital Outputs Module

#### Prerequisites

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurately in place.





#### Wiring examples

To connect the module to en external poer supply wire it as shown in the following example. Not that there ae no jumpers set as this is the default configuration.

<div id="o8_default" class="wiring isActive"><img src="/.gitbook/assets/wiring/o8_external.svg" /></div>


---

To use the internal 5V provided bythe voltage regulator on the pilot mainboard set the jumpers as shown below.


<div id="o8_5v" class="wiring  isActive "><img src="/.gitbook/assets/wiring/o8_5v.svg" /></div>



---


Some special configuration pilotboards exist that come with a 24V powersupply on board. Those boards are typically used in an industrial environment. If you have one of those baords make sure to set the jumpers as shown below.


<div id="o8_24v" class="wiring  isActive"><img src="/.gitbook/assets/wiring/o8_24v.svg" /></div>








#### Basics

There are two versions of the module. 
One with a pinheader (O8H001), the other with a pluggable spring-cage connector (O8P001)
The functionality in software is identical.

When the driver is configured, you can use the Outputs like regular GPIOs on the Raspberry Pi. 
If it is the first GPIO module on the Pilot the base address would be 55. So the GPIOs are 55-62 (O0-O7).

First, connect the module and configure it using the command 'pilot setup'.



#### Exporting the Outputs to Linux


You can get information on what can be done with the module by typing 'pilot module' in the console.


To configure the outputs you need to enable the GPIOs.
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



Next we must define them as outputs

    echo out > /sys/class/gpio/gpio55/direction
    echo out > /sys/class/gpio/gpio56/direction
    echo out > /sys/class/gpio/gpio57/direction
    echo out > /sys/class/gpio/gpio58/direction
    echo out > /sys/class/gpio/gpio59/direction
    echo out > /sys/class/gpio/gpio60/direction
    echo out > /sys/class/gpio/gpio61/direction
    echo out > /sys/class/gpio/gpio62/direction


#### Usage


Now the 8 OUTPUT pins are available on the Linux host.

You can set them high or low by writing a 1 respectively a 0 to the appropriate file.


Now we can turn the pin on

    echo 1 > /sys/class/gpio/gpio55/value
    echo 1 > /sys/class/gpio/gpio56/value
    echo 1 > /sys/class/gpio/gpio57/value
    echo 1 > /sys/class/gpio/gpio58/value
    echo 1 > /sys/class/gpio/gpio59/value
    echo 1 > /sys/class/gpio/gpio60/value
    echo 1 > /sys/class/gpio/gpio61/value
    echo 1 > /sys/class/gpio/gpio62/value


.. and off

    echo 0 > /sys/class/gpio/gpio55/value
    echo 0 > /sys/class/gpio/gpio56/value
    echo 0 > /sys/class/gpio/gpio57/value
    echo 0 > /sys/class/gpio/gpio58/value
    echo 0 > /sys/class/gpio/gpio59/value
    echo 0 > /sys/class/gpio/gpio60/value
    echo 0 > /sys/class/gpio/gpio61/value
    echo 0 > /sys/class/gpio/gpio62/value




