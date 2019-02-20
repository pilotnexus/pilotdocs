---
description: Install Pilot Config
---



{% hint style="danger" %} This page explains the alternate setup steps required to install the pilot manually on a stock raspbian image.

These steps are **normally not needed** anymore and are just left here for reference. 

Please use the Pilotetcher to [get started](/docs/getting-started/etcher.md) 
{% endhint %}


# Install Pilot Config



<p class="sub1">Install Tools on the Raspberry Pi and interact with the Hardware</p>

{% hint style="info" %} You need an SD card with a Raspbian or Ubuntu Mate Image. Look [here](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) if you need help setting up the Operating System.
{% endhint %}

Pilot-Config is a tool that sets up your Rapberry Pi as a Node and installs the Pilot Drivers that communicate to the Pilot Mainboard and configures your firmware for the [modules](/docs/modules/module_overview.md) used.





## Install Pilot-Config

 Create a user on amescon.com
  You will need username and password for the pilot-config tool. Check your email to verify your email address.

1. Install Pip3
  `sudo apt-get install -y python3-pip`
2. Install Pilot-Config:
  `sudo -H pip3 install pilot-config`
3. Run:
  `sudo pilot setup`

4. If you are running the tool for the first time, drivers are installed and a reboot is required.

5. After reboot, re-run sudo pilot
  Log in with your user credentials.
  Inserted boards should be automatically detected and you can build and install the firmware for it. 










# Install Pilot Node
<p class="sub1">Remote access your Raspberry Pi and Pilot-connected Hardware</p>

---

To harness the full power of the Pilot Automation Platform, you need to install Pilot Node on your Raspberry Pi. PilotNode is a service that connects the Raspberry Pi to the Pilot Cloud, making it accessible from wherever you are, from the Pilot Cockpit Web and Mobile App and the Pilot API. It also enables powerful data logging and analysis.

### 1. Install NodeJS

{% hint style="warning" %}
Note: If you have NodeJS installed already on your Raspberry Pi remove it first!
``` bash
sudo -i
apt-get remove nodered -y
apt-get remove nodejs nodejs-legacy -y
exit
```
{% endhint %}

First get Node and install it:
``` bash
sudo sh -c 'curl -sL https://deb.nodesource.com/setup_10.x | bash -'
sudo apt-get install -y nodejs
```

You can verify if that worked by getting the version numbers:

``` bash
$ node --version
v10.7.0
$ npm --version
6.1.0
```
### 2. Install Pilotnode

Run:
``` bash
$ sudo npm install -g pilotnode
```


### 3. Register Pilotnode as a Service

Register service:
```
$ pilotnode install
```

run at boot:
```
sudo systemctl enable pilotnode
```

status:
```
sudo systemctl status pilotnode
```
