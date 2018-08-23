---
description: Install PilotNode
---

# Getting Started
<p class="subtitle">Remote access your Raspberry Pi and Pilot-connected Hardware</p>

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