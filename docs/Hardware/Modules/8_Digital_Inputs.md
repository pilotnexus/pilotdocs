## 8 Digital Inputs Plugin Module


The 8 Digital Inputs Plugin Module is made available in two iterations:

---

### I8H001

![alt text](/images/8_Digital_Inputs/I8H001.png "8 Digital Inputs module with header connector")

With header connector.

---

### I8P001

![alt text](/images/8_Digital_Inputs/I8P001.png "8 Digital Inputs module with pluggable spring-cage connector")

With pluggable spring-cage connector.

---


### Applications

* Buttons.
* Smart meters.
* Sensors (photocell, valve position sensors, etc)
* Digital outputs of other devices.

---


### Specifications

* 5-30V Input Voltage.
* Switching on 1/2 of the reference voltage with hysteresis.
* Jumper: internal (5V or 24V) or external (5-30V).
* Possible configurations: Input-Module (GPIOs) or Counter (Interrupts).
* Available with pin-header or pluggable spring-cage connector.

---


### Dimensions

36.6mm x 29.8mm (1.441in x 1.173in).


---


### Notes on use

When the driver is configured, you can use the Inputs like regular GPIOs on the Raspberry Pi. If it is the first GPIO module on the Pilot the base address would be 55. So the GPIOs are 55-62 (I0-I7).

First, connect the module and configure it using the pilotsetup.sh script.

---


### Exporting the IOs

    echo 55 > /sys/class/gpio/export && 
	echo 56 > /sys/class/gpio/export && 
	echo 57 > /sys/class/gpio/export && 
	echo 58 > /sys/class/gpio/export && 
	echo 59 > /sys/class/gpio/export && 
	echo 60 > /sys/class/gpio/export && 
	echo 61 > /sys/class/gpio/export && 
	echo 62 > /sys/class/gpio/export


---


### Output current value of all 8 Inputs

    cat /sys/class/gpio/gpio55/value && 
	cat /sys/class/gpio/gpio56/value && 
	cat /sys/class/gpio/gpio57/value && 
	cat /sys/class/gpio/gpio58/value && 
	cat /sys/class/gpio/gpio59/value && 
	cat /sys/class/gpio/gpio60/value && 
	cat /sys/class/gpio/gpio61/value && 
	cat /sys/class/gpio/gpio62/value


---


### Pinout