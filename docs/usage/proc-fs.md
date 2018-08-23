---
title: "Virtual Filesystem"
---

# Virtual Filesystem
<p class="sub1">Understanding the virtual filesystem that enables the deep integration of the pilot platform</p>

---

## What is it good for?

The virtual filesystem enables you to read data from and write data to the Pilot Modules and Pilot Mainboard. It is the main way (other than through the App when connected to the cloud through PilotNode) of interacting with the hardware.

## Structure

The root directory of the pilot virtual file system is located in:
`/proc/pilot`

Folder Structure:
<div class="treeview"> 
    <div>/proc/pilot</div> 
    <ul> 
        <li> 
            <div>module1</div> 
            <ul> 
                <li><div>eeprom</div></li>
            </ul>
        </li>
        <li> 
            <div>module2</div> 
            <ul> 
                <li><div>eeprom</div></li>
            </ul>
        </li>
        <li> 
            <div>module3</div> 
            <ul> 
                <li><div>eeprom</div></li>
            </ul>
        </li>
        <li> 
            <div>module4</div> 
            <ul> 
                <li><div>eeprom</div></li>
            </ul>
        </li>
        <li> 
            <div>plc</div> 
            <ul> 
                <li><div>varconf</div></li>
                <li><div>vars</div></li>
            </ul>
        </li>
    </ul>
</div>

### Root Folder
<p class="sub3">/proc/pilot</p>  
  
### Module Folders
<p class="sub3">/proc/pilot/module[1-4]</p>  
  
### eeprom Folder
<p class="sub3">/proc/pilot/module[1-4]/eeprom</p>
  
The files in the eeprom folder map the eeprom of the module directly to the filesystem. That means when you read from one of the files, or write to it, the Pilot Mainboard accesses the internal memory of the module and reads from it/writes to it. 

The folder contains the following files:
- uid
- hid
- fid
- user01-user10

{% hint style="danger" %} If you modify the fid or hid file content, pilot-config cannot identify the module correctly. Please handle these fields with care!
{% endhint %}

<span class="emphasize">uid</span> - Unique identifier. This file can only be read. It is a unique number for each module.

<span class="emphasize">hid</span> - Hardware Id. The hardware this module identifies as.

<span class="emphasize">fid</span> - Firmware Id. The currently configured firmware for that module.

<span class="emphasize">user01-user10</span> - User Defined Fields. Each of the files can store 8 bytes.


### PLC Folder
<p class="sub3">/proc/pilot/plc</p>

This folder contains PLC related information and provides you with a powerful way to interact with PLC variables.