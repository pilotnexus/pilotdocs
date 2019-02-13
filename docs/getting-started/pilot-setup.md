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


TODO INSERT PILOT SETUP SCREEN WITH MODULES

You are all setup and ready to build your application.

If you want to connect to the pilot cloud make sure to ..

TODO pilotnode setup details here 