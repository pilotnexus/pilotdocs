# 8 Digital Outputs Plugin Module

The 8 Digital Outputs Plugin Module is made available in two iterations:

---


### O8H001

![alt text](/images/8_Digital_Outputs/O8H001.png "8 Digital Outputs module with header connector")

With header connector.

---


### O8P001

![alt text](/images/8_Digital_Outputs/O8H001.png "8 Digital Outputs module with pluggable spring-cage connector")

With pluggable spring-cage connector.

---


### Applications

* Drive large relays
* LEDs
* Drive small motors


---

### Specifications

* 5-50V Input Voltage
* 500 mA output source current capability
* Direct drive of inductive loads (e.g relays) due to integrated clamp diodes
* Jumper: internal (5V or 24V) or external (5-50V)
* Available with pin-header or pluggable spring-cage connector
* Size: 36.6mm x 29.8mm (1.441in x 1.173in)

---


### Pinout

{% module svg="o8.svg" %}
<script>
var pin_default_desc = 'Output pin. Maximum current: 350mA. When all outputs are on simultanously, a current limit of 100mA should be respected.'
var pins = {
    "1": {title: 'Power (+)', direction: {default: 'in', v5: 'out', v24: 'out'}, description: {
        default: 'The output voltage is set by the voltage you supply to this pin. In this jumper configuration, you need to supply bewtween 5 and 48V to this pin.',
        v5: 'In this jumper configuration, power is supplied from the internal 5V rail. You can source 5V from this pin, but keep in mind that current capability is limited. <div class="alert alert-danger hints-alert">Do not connect this pin to a power source when using this jumper configuration, magic smoke could escape!</div>',
        v24: 'In this jumper configuration, power is supplied from the internal 24V rail. <div class="alert alert-info hints-alert">You need a Pilot Mainboard with internal 24V supply. The default version does not support this.</div>'
    }},
    "2": {title: 'GND (-)', direction: '', description: {
        default: 'Ground Pin. Connect this pin to the ground pin of your system.'
    }},
    "3": {title: 'Output 1', direction: { default: 'out' }, description: {default:  pin_default_desc} },
    "4": {title: 'Output 2', direction: { default: 'out' }, description: {default:  pin_default_desc} },
    "5": {title: 'Output 3', direction: { default: 'out' }, description: {default:  pin_default_desc} },
    "6": {title: 'Output 4', direction: { default: 'out' }, description: {default:  pin_default_desc} },
    "7": {title: 'Output 5', direction: { default: 'out' }, description: {default:  pin_default_desc} },
    "8": {title: 'Output 6', direction: { default: 'out' }, description: {default:  pin_default_desc} },
    "9": {title: 'Output 7', direction: { default: 'out' }, description: {default:  pin_default_desc} },
    "10": {title: 'Output 8', direction: { default: 'out' }, description: {default: pin_default_desc} }
};

var selectedconfiggroup = null
var configurations = {
                external: {
                    title: 'External Power',
                    default: { title: '5-48V', shortdesc: 'External Power Mode', settings: [], wiring: ['o8_default'] },
                },
                internal: {
                    title: 'Internal Power',
                    v5: { title: '5V',  shortdesc: 'Internal 5V Power Mode', settings: ['2'], wiring: ['o8_5v']},
                    v24: { title: '24V', shortdesc: 'Internal 24V Power Mode', settings: ['1','3'],  wiring: ['o8_24v']}
                }
            }
</script>
{% endmodule %}

### Wiring examples
<div id="o8_default" class="wiring isActive"><img src="/.gitbook/assets/wiring/o8_external.svg" /></div>
<div id="o8_5v" class="wiring"><img src="/.gitbook/assets/wiring/o8_5v.svg" /></div>
<div id="o8_24v" class="wiring"><img src="/.gitbook/assets/wiring/o8_24v.svg" /></div>
