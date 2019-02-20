## 8 Analog Inputs Plugin Module

{% module svg="ai8.svg" %}
<script>
var pin_default_desc = 'Input Pins '
var pins = {
    "1": {title: 'Power (+)', direction: {default: 'out'}, description: {
        default: 'Connected to the internal 5V rail.'
    }},
    "2": {title: 'GND (-)', direction: '', description: {
        default: 'Ground Pin. Connect this pin to the ground pin of your system.'
    }},
    "3": {title:  'Analog Input 1', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "4": {title:  'Analog Input 2', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "5": {title:  'Analog Input 3', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "6": {title:  'Analog Input 4', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "7": {title:  'Analog Input 5', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "8": {title:  'Analog Input 6', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "9": {title:  'Analog Input 7', direction: { default: 'in' }, description: {default:  pin_default_desc} },
    "10": {title: 'Analog Input 8', direction: { default: 'in' }, description: {default: pin_default_desc} }
};

var selectedconfiggroup = null
var configurations = null

</script>
{% endmodule %}

The 8 Analog Inputs Plugin Module is made available in two iterations:

---

### AI8H001

![alt text](/images/8_Analog_Inputs/AI8H001.png "8 Digital Analog Inputs module with header connector")

With header connector.

---

### AI8P001

![alt text](/images//8_Analog_Inputs/AI8P001.png "8 Digital Analog Inputs module with pluggable spring-cage connector")

With pluggable spring-cage connector.

---


### Applications

* Analog sensors e.g. temperature, position, pressure etc...
* Potentiometers.

---


### Specifications

* 8x12 bit resolution.
* 0-10V input range (4-20mA alternatively, depending on variant).
* 60 kbps maximum sample rate.

---

### Dimensions

36.6mm x 29.8mm (1.441in x 1.173in).

---

### Pinout