## 8 Digital Inputs Plugin Module

{% module svg="i8.svg" %}
<script>
var pin_default_desc = 'Input Pins '
var pins = {
    "1": {title: 'Power (+)', direction: {default: 'in', v5: 'out', v24: 'out'}, description: {
        default: 'The maximum input voltage is set by the voltage you supply to this pin. In this jumper configuration, you need to supply bewtween 5 and 30V to this pin.',
        v5: 'In this jumper configuration, the internal 5V rail is used as a reference. <div class="alert alert-danger hints-alert">Do not connect this pin to a power source when using this jumper configuration, magic smoke could escape!</div>',
        v24: 'In this jumper configuration, the internal 24V rail is used a a reference. <div class="alert alert-info hints-alert">You need a Pilot Mainboard with internal 24V supply. The default version does not support this.</div>'
    }},
    "2": {title: 'GND (-)', direction: '', description: {
        default: 'Ground Pin. Connect this pin to the ground pin of your system.'
    }},
    "3": {title:  'Input 1', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "4": {title:  'Input 2', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "5": {title:  'Input 3', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "6": {title:  'Input 4', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "7": {title:  'Input 5', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "8": {title:  'Input 6', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "9": {title:  'Input 7', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "10": {title: 'Input 8', direction: { default: 'in' }, description: {default: pin_default_desc} }
};

var selectedconfiggroup = null
var configurations = {
                external: {
                    title: 'External Power',
                    default: { title: '5-30V', shortdesc: 'External Power Mode', settings: [] },
                },
                internal: {
                    title: 'Internal Power',
                    v5: { title: '5V',  shortdesc: 'Internal 5V Power Mode', settings: ['2']},
                    v24: { title: '24V', shortdesc: 'Internal 24V Power Mode', settings: ['1','3']}
                }
            }
</script>
{% endmodule %}

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