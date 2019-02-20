---
title: "Build Firmware"
---

# Accessing Module Data
<p class="sub1">You want to embed custom code to the Pilot Nexus Microcontroller? This is how you start</p>

---

1. The first step is to install Pilot Config on your development machine.
2. You also need `arm-none-eabi-gcc` cross-compiler
3. If you have done that, create a new folder where your firmware project should reside and run `pilot init`
Enter the hostname/IP of your Node (Raspberry Pi with Pilot Nexus board + Modules) and username/password to let the tool connect to it via SSH.
4. The pilot config tool creates files and folders containing the base firmware for your module configuration.
5. Run `pilot build`. That compiles your firmware
6. To program it, run `pilot program`
7. that's it!
