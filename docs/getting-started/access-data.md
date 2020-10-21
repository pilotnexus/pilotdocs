---
title: "Accessing Module Data"
---

# Accessing Module Data
<p class="sub1">Lets read out some sensor values</p>

---


Depending on the module you inserted, there is further information available by typing:

``` bash
$ pilot module
```

![alt text](/images/pilotsetup/pilotmodule.png "pilot module")


For example the installed module in this case is a digital input module.

To access the pinstates from the filesystem you first export the pin with

``` bash
$ echo 55 > /sys/class/gpio/export
```

now you can access the pinstate with the filedescriptor found at /sys/class/gpio/gpio55/value
For this example we will use cat to read it

``` bash
$ cat /sys/class/gpio/gpio55/value
```

When the pin is floating or connected to GND you will read 0.
If you connect the pin to +5V you will read 1. 

The documentation for all available modules can be found in the [modules overview](/docs/Hardware/Modules/Module_Overview.md) section.