# Getting Started
<p class="sub1">Get your hardware setup up and running in less than ten minutes</p>

---
Before you get started with the Pilot Nexus automation platform you'll need some hardware:

![alt text](/images/logo.png "My Logo")

1. Raspberry Pi
2. [Pilot Nexus main board](https://uk.rs-online.com/web/p/semiconductor-development-kit-accessories/8474894/)
3. One or more [Pilot Nexus plugin modules](https://uk.rs-online.com/web/c/?sra=oss&r=t&searchTerm=amescon+module)

### 1. Configuring Firmware
In order to configure the firmware for your modules you need to [install and run pilot-config](/docs/getting-started/install-pilot-config.md) first.

### 1. Download Image 
Use the [pilotetcher app](https://github.com/amescon/pilotetcher/releases/) to burn a preconfigured image to a SD card

### 2. Configure Firmware
To configure the firmware for your modules you need to run [*pilot setup*](/docs/getting-started/install-pilot-config.md) first.
After that you can communicate with your modules.

### 3. Monitor and Control from Anywhere
If you want to connect it to the cloud and monitor/remote control the Rasbperry Pi with the App or the Pilot Nexus API, you need to [install pilotnode](/docs/getting-started/install-pilotnode.md).