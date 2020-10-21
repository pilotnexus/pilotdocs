# GPS Plugin Module

This module brings high precision GPS data to your project.
It connects as a serial device and provides GPS data in the common NMEA dataformat.
Therefor it can be used with a variety of applications.
Using the *gpsd* it can provide location information to all your system applications.

---


### GPSA001

![alt text](/images/GPS/GPSA001.png "GPS module")


GPS module with internal antenna and external antenna connector.

---

### Applications

* Global positioning
* Clock synchronisation


---


### Specifications

* Power Consumption: 20mA tracking, 25 mA acquisition.
* 210 PRN channels.
* 66 search channels.
* 22 simultaneous tracking channels.
* Supports various location and navigation applications, including autonomous GPS, QZSS, SBAS (WAAS, EGNO, GAGAN, MSAS), AGPS. 
* Ultra-High Sensitivity: -165dBm (w/o patch antenna), up to 45dB C/N of SVs in open sky reception.
* High Update Rate: up to 10Hz.
* AGPS Support for fast TTFF (EPO™ 7/14 days).
* Built-in 15X15X2.5mm ceramic patch antenna.
* Microcoaxial antenna jacket - Molex 0734120110.
* Backup Battery voltage between 2.0 and 4.3 Volt, typically 3V
* 36.6mm x 29.8mm (1.441in x 1.173in)

---

### Optional / Nice to know

The module has a battery connector with labeled + and - pins.
You can connect any Battery or LiPo here as long as the voltage is between 2.0 and 4.3 Volt.
Typically you would connect a CR2032 coincell or similar.

If power was not preserved, the GPS module will perform a lengthy cold start every time it is powered-on because previous satellite information is not retained and needs to be retransmitted. This Information can be stored and reused by connecting a small battery to the *battery backup* pins.