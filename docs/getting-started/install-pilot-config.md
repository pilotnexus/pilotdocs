---
description: Install Pilot Config
---

# Getting Started
<p class="sub1">Install Tools on the Raspberry Pi and interact with the Hardware</p>

{% hint style="info" %} You need an SD card with a Raspbian or Ubuntu Mate Image. Look [here](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) if you need help setting up the Operating System.
{% endhint %}

Pilot-Config is a tool that sets up your Rapberry Pi as a Node and installs the Pilot Drivers that communicate to the Pilot Mainboard and configures your firmware for the [modules](/docs/modules/module_overview.md) used.

## Install Pilot-Config

 Create a user on amescon.com
  You will need username and password for the pilot-config tool. Check your email to verify your email address.

1.  Run:
  `sudo -H pip3 install pilot-config`

2. Run:
  `sudo pilot`

3. If you are running the tool for the first time, drivers are installed and a reboot is required.

4. After reboot, re-run sudo pilot
  Log in with your user credentials.
  Inserted boards should be automatically detected and you can build and install the firmware for it. 


# Troubleshooting

yuyuy

## Linux Driver

Please check that your Raspberry Pi runs a supported kernel version. You can check this by running `uname -a` in the Terminal. You should get a response similar to this:
```
Linux raspberry 4.14.50-v7+ #1122 SMP Tue Jun 19 12:26:26 BST 2018 armv7l GNU/Linux
```
Check if the version, in this example `4.14.50-v7+ #1122`, is in the list below:
<p id="kernelversions" style="opacity: 0.3;">loading kernel versions...
<script>
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var list = JSON.parse(xmlHttp.responseText);
      var innerHtml = "";
      for (var i = 0; i < list.length; i++) {
        innerHtml += '<li style="font-size: 0.8em;">' + list[i]["version"] + " #" + list[i]["buildnum"] + "</li>";
      }
      var kv = document.getElementById("kernelversions");
      kv.innerHTML = '<ul style="border-style: solid; border-width: 2px; border-color:lightgray; border-radius:6px; columns: 2; -webkit-columns: 2; -moz-columns: 2;">' + innerHtml + "</ul>";
      kv.removeAttribute("style");
    }
  };
  xmlHttp.open("GET", "https://mypilot.io/kernelversions", true); 
  xmlHttp.send(null);
</script> </p>
