# 8 Digital Output Module

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
var configurations = {
                external: {
                    title: 'External Power',
                    default: { title: '5-48V', shortdesc: 'External Power Mode', settings: [] },
                },
                internal: {
                    title: 'Internal Power',
                    v5: { title: '5V',  shortdesc: 'Internal 5V Power Mode', settings: ['2']},
                    v24: { title: '24V', shortdesc: 'Internal 24V Power Mode', settings: ['1','3']}
                }
            }
</script>
{% endmodule %}