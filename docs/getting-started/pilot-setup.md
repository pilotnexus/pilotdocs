---
title: "Configuring the pilot"
---

# Configuring the pilot
<p class="sub1">Setting up the pilot for your application</p>

---


<TODO: add bluetotoh setup instructions> 

Connect the pilot so your network and turn it on.

Log in to the pilot with an ssh client.

SSH clients are preinstalled on Linux and OSX for windows you can install the [putty client](https://putty.org/)


```
ssh pi@pilot.local  
	Login: pi
	Password: raspberry
```


Once  logged in run the command 

``` bash
$ sudo pilot setup
```

It will display a list of attached modules that might look like this:


![alt text](/images/pilotsetup/pilotsetup.png "sudo pilot setup")

You are all setup and ready to build your application.



Depending on the module you inserted, there is further information available by typing:

``` bash
$ pilot module
```

![alt text](/images/pilotsetup/pilotmodule.png "pilot module")



If you want to connect to the pilot cloud make sure to [*setup pilotnode*](/docs/getting-started/pilot-node-setup.md).