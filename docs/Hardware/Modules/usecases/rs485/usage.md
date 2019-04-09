### Using the RS-485 Module

#### Prerequisites

First make sure the board is properly attached to the pilot mainboard.
You may use screws to make sure the board will be 100% accurately in place.



#### Basics

Plug in in the module and enable it.
Run *sudo pilot setup* to configure the pilot motherboard and load the matching kernel driver.
You should see the RS-485 module in the  list.
Once installed you can run *pilot module* to get an overview of what can be done with the installed modules.

### Configurations
*sudo pilot setup* will show you an asterisk next to the module because there are different configurations available.
The default configuration enables one RS-485 connection on the pins A1 and B1.
RS-485 is asynchronous and you can only send or receive but not both at thesame time.
Its main purpose is master to slave communication where you have one master / controller and multiple slaves / receivers on a bus in parallel.
A common usecase is DMX512 where one controller sends signals to multiple light appliances.

### Testsetup

To test the setup ypu can configure the module to use both RS485 ports and connecgt them.
Run *sudo pilot setup* and press "1" (or another matching number if the module is plugged into another slot) to select the alternative firmware configuration.
Now select option *2. RS-485 2-port*, this will enable ports A2 and B2.
Once configured you can wire pin A1 to pin A2 and pin B1 to pin B2.
Open two terminals and you can now send data froom one serial interface to the other.

    screen /dev/ttyP1 115200

and in the second terminal

    screen /dev/ttyP2 115200

You should now see the text you type in one terminal appear in the other terminal.
You can leave screen by pressing  *Ctrl + a* than *k* to terminate the sessions.


### RS-485 4 Wires
There is another way of using the RS-485 board that provides full duplex RX/TX at the same time.
To enable this mode run *sudo pilot setup* and press "1" (or another matching number if the module is plugged into another slot) to select the alternative firmware configuration.
Now select option *3. RS-485 4-wire*.

This mode provides simultaneous RX/TX capablitites similar to RS-422.



### Good to know

RS-485 is asynchronous meaning you can not send end receive data at the same time.
The chips used in th epilot board are clever enough to provide autodetection when sending data.
Once the transmission finished, it automatically switches back to receive mode and accepts sent on the bus.





