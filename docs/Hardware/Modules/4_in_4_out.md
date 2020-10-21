# 4 Inputs, 4 Outputs, 4 Buttons, 8 Leds

This board is the Demomodule that comes with your pilot motherboard for evaluation purposes.
It features 4 Buttons, 8 Leds and a pinheader with 10 pins (+5V,GND, 4 input, 4 output)


TODO insert correct picture
![alt text](/images/8_Digital_Inputs/I8H001.png "Basic Demoboard")



---




### Applications

* Demoboard for the pilot nexus to evaluate basic functionality
* Blink up to 8 LEDs
* Drive small motors
* Switch small relays
* Read 4 buttons
* Read 4 input pins
* Drive 4 output pins


---

### Specifications

* 5v Input internal provided voltage
* 100 mA output current capability per pin
* 8 Leds for status indication
* Size: 36.6mm x 29.8mm (1.441in x 1.173in)

---


### Pinout


{% module svg="4in4out.svg" %}
<script>
var pin_default_desc_i = 'Input pin. To be used with the internally provided 5V on the Power pin (0)'
var pin_default_desc_o = 'Output pin. Maximum current: 100mA. When all outputs are on simultanously, a current limit of 100mA should be respected.'

var pins = {
    "1": {title: 'Power (+)', direction: {default: 'out'}, description: {
        default: 'The output voltage on this pin is 5V and is provided by the pilot nexus mainboard. It is an OUTPUT pin.'
    }},
    "2": {title: 'GND (-)', direction: '', description: {
        default: 'Ground Pin. Connect this pin to the ground pin of your system.'
    }},
    "3": {title: 'Input 0', direction: { default: 'out' }, description: {default:  pin_default_desc_i} },
    "4": {title: 'Input 1', direction: { default: 'out' }, description: {default:  pin_default_desc_i} },
    "5": {title: 'Input 2', direction: { default: 'out' }, description: {default:  pin_default_desc_i} },
    "6": {title: 'Input 3', direction: { default: 'out' }, description: {default:  pin_default_desc_i} },
    "7": {title: 'Output 0', direction: { default: 'out' }, description: {default:  pin_default_desc_o} },
    "8": {title: 'Output 1', direction: { default: 'out' }, description: {default:  pin_default_desc_o} },
    "9": {title: 'Output 2', direction: { default: 'out' }, description: {default:  pin_default_desc_o} },
    "10": {title: 'Output 3', direction: { default: 'out' }, description: {default: pin_default_desc_o} }
};

var selectedconfiggroup = null
var configurations = null
</script>
{% endmodule %}
/

---


### Example usecases

Check out the subpages on the lefthand menu for examples on what can be done with this module.