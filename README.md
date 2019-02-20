---
title: "Product Overview"
---

# Introduction

<p class="sub1">
About the Pilot Nexus automation platform and how to get started.</p>

---

## What is Pilot Nexus?


Pilot Nexus brings you the ability to upgrade [SBCs](https://en.wikipedia.org/wiki/Single-board_computer) (single-board computers) into very powerful control platforms.

With a range of low-cost plugin modules available, each backed by rich software applications designed to make installation and operation easy, the device is ideal for managing industrial automation, home automation, and vastly improving upon the communications between multiple control devices.

This SBC extension has been built to encompass a huge range of potential applications. Pilot Nexus is not only an expanded connectivity layer, it’s a complete, hardware to firmware technology stack integrating everything from task-specific drivers to cloud storage.

---

## Features


* Slots for up to four extension modules, each providing a wide variety of additional functionalities \(see _**\_**_ \).
* 32 bit ARM microcontroller for real-time operating.
* Altera CPLD for dynamic wiring and ultra-fast logic.
* Real-time clock \(CR1025 battery required for RTC\).
* Open source software and full driver support.
* Automatically detects and configures all connected extension modules.
* Mounting holes for module slots \(M2, screws included\).
* Optional debugging headers.
* Cut-out for RaspberryPi display cable.
* Power indicators.
* Raspberry Pi aligned mounting holes.
* Raspberry Pi connector.
* 50 mA power consumption.

---

## Benefits of using Pilot Nexus


<span class="emphasize">up and running quickly</span> - Connect your hardware and control/monitor it over the web in a  matter of minutes.

<span class="emphasize">online and offline</span> - It has been developed to be cloud-native, but it can also be used without a connection to the cloud, without being connected to your own servers, or completely offline if preferred. This enables many use-cases that wouldn't ordinarily be possible with most IoT devices.

<span class="emphasize">modular</span> - Flexible modules enable you to connect almost any hardware devices across a wide spectrum of potential applications, e.g. maker projects, building automation routines and controlling industrial automation systems.

<span class="emphasize">flexible</span> - Powerful drivers expose the hardware interface to the linux virtual file system. This enables you to use any programming language and interact with the hardware via Linux. 

<span class="emphasize">real-time clocking</span> - Use this powerful feature to compile real-time code directly into the firmware and enable super-relieable control-loops that are independent of the state of a Linux system.

<span class="emphasize">open source software</span> - Change whatever you want in whatever way you want. From the highest level, e.g. your web-based monitoring dashboard, down to the firmware.

---

## Advantages over standard PLCs?


- Lower cost.
- Because of its wide variety of extension modules, an enormous range of connectivity options, not available on PLCs, are standard.
- Completely transparent operation.
- Debugging is possible down to the microcontroller level if desired.
- Because of SBCs like the Raspberry Pi it also includes a Linux PC that can do complex storage and visualization tasks simply by connecting a monitor to the HDMI port, e.g. running a webserver, HMI interfacing, storing data in a database, or connecting to the web.

... all without compromising the PLC performance.

---

## Advantages over conventional microcontroller boards


- Communication to a Linux PC (Raspberry Pi) is already implemented and open-source.
- Due to native Linux serial port support you can communicate with extension boards like the GSM or GPS modules easily.
- Pilot Nexus is not confined purely to I/O capabilities so there's no need to develop your own PCB for communications. 
- Read sensors, control motors or relays simply by choosing the appropriate modules.
- Handle complex things on the Raspberry Pi (Webserver, Ethernet communication, Database storage) with the appropriate tools, e.g. Python or Mono, and let the Pilot Nexus kernel drivers handle low-level communications with the outside world.

---

## How do I get started?


All you need is a Raspberry Pi with an SD card, a Pilot Nexus main board and, if you want to do something useful, at least one [module](docs/Hardware/modules/module_overview.md) installed on the Pilot Main Board.

See the [Getting Started](/docs/getting-started/README.md) section for a step-by-step tutorial.