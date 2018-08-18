---
description: Test A Desc
---

# Test A

## Overview

TODO   
   


#### Features

* Slots for up to four extension modules, each providing a wide variety of additional functionalities \(see _**\_**_ \).
* 32 bit ARM microcontroller for real-time operating.
* Altera CPLD for synamic wiring and ultra-fast logic.
* Real-time clock \(CR1025 battery required for RTC\).
* Open source software and full driver support.
* Automatically detects and configures all connected devices.
* 50 mA power consumption.
* Mounting holes for module slots \(M2, screws included\).
* Optional debugging headers.
* Cut-out for RaspberryPi display cable.
* Power indicators.
* Raspberry Pi aligned mounting holes.
* Raspberry Pi connector.

## Hardware

 [![PiLOT Ctrl Main Board](https://amescon.com/wp-content/uploads/2018/04/pilot-1.png?raw=true)](https://www.apertus.org/axiom-beta)   
 **Test test test**   
   
 The Pilot main board is a smart, standalone device and incorporates its own microprocessor \(This is programmed automatically or a user can program it themselves\), so it wouldn't neccesarily require a SBC depending on user requirements. This is an important feature because it allows for configuartion of timing behaviour - useful for **\_\_**.

guarantee of cycle time real-time processing Normally for this PLCs are used \(normally expensive\)

* Dimensions: 80 x 56.2 mm.
* Weight:



### MCU \(Microcontroller unit\)

STM32F103RC [MCU](https://en.wikipedia.org/wiki/Microcontroller)   
 The STM32F103xC, STM32F103xD and STM32F103xE performance line family incorporates the high-performance ARM® Cortex®-M3 32-bit RISC core operating at a 72 MHz frequency, high-speed embedded memories \(Flash memory up to 512 Kbytes and SRAM up to 64 Kbytes\), and an extensive range of enhanced I/Os and peripherals connected to two APB buses. All devices offer three 12-bit ADCs, four general-purpose 16-bit timers plus two PWM timers, as well as standard and advanced communication interfaces: up to two I2Cs, three SPIs, two I2Ss, one SDIO, five USARTs, an USB and a CAN.   
 The STM32F103xC/D/E high-density performance line family operates in the –40 to +105 °C temperature range, from a 2.0 to 3.6 V power supply. A comprehensive set of power-saving mode allows the design of low-power applications.   
 These features make the STM32F103xC/D/E high-density performance line microcontroller family suitable for a wide range of applications such as motor drives, application control, medical and handheld equipment, PC and gaming peripherals, GPS platforms, industrial applications, PLCs, inverters, printers, scanners, alarm systems video intercom, and HVAC.  
  


* Core: ARM® 32-bit Cortex®-M3 CPU

  _\*_ 72 MHz maximum frequency, 1.25 DMIPS/MHz \(Dhrystone 2.1\) performance at 0 wait state memory access

  \*\* Single-cycle multiplication and hardware division

* Memories

  \*\* 256 to 512 Kbytes of Flash memory

  \*\* up to 64 Kbytes of SRAM

  \*\* Flexible static memory controller with 4 Chip Select. Supports Compact Flash, SRAM, PSRAM, NOR and NAND memories

  \*\* LCD parallel interface, 8080/6800 modes

* Clock, reset and supply management

  \*\* 2.0 to 3.6 V application supply and I/Os

  \*\* POR, PDR, and programmable voltage detector \(PVD\)

  \*\* 4-to-16 MHz crystal oscillator

  \*\* Internal 8 MHz factory-trimmed RC

  \*\* Internal 40 kHz RC with calibration

  \*\* 32 kHz oscillator for RTC with calibration

* Low power

  \*\* Sleep, Stop and Standby modes

  \*\* VBAT supply for RTC and backup registers

* 3 × 12-bit, 1 μs A/D converters \(up to 21 channels\)

  \*\* Conversion range: 0 to 3.6 V

  \*\* Triple-sample and hold capability

  \*\* Temperature sensor

* 2 × 12-bit D/A converters
* DMA: 12-channel DMA controller

  \*\* Supported peripherals: timers, ADCs, DAC, SDIO, I2Ss, SPIs, I2Cs and USARTs

* Debug mode

  \*\* Serial wire debug \(SWD\) & JTAG interfaces

  \*\* Cortex®-M3 Embedded Trace Macrocell™

* Up to 112 fast I/O ports

  \*\* 51/80/112 I/Os, all mappable on 16 external interrupt vectors and almost all 5 V-tolerant

* Up to 11 timers

  \*\* Up to four 16-bit timers, each with up to 4 IC/OC/PWM or pulse counter and quadrature \(incremental\) encoder input

  \*\* 2 × 16-bit motor control PWM timers with dead-time generation and emergency stop

  \*\* 2 × watchdog timers \(Independent and Window\)

  \*\* SysTick timer: a 24-bit downcounter

  \*\* 2 × 16-bit basic timers to drive the DAC

* Up to 13 communication interfaces

  \*\* Up to 2 × I2C interfaces \(SMBus/PMBus\)

  \*\* Up to 5 USARTs \(ISO 7816 interface, LIN, IrDA capability, modem control\)

  \*\* Up to 3 SPIs \(18 Mbit/s\), 2 with I2S interface multiplexed

  \*\* CAN interface \(2.0B Active\)

  \*\* USB 2.0 full speed interface

  \*\* SDIO interface

* CRC calculation unit, 96-bit unique ID
* ECOPACK® packages

  [Datasheet](https://www.st.com/resource/en/datasheet/stm32f103rc.pdf)

### CPLD \(Complex programmable logic device\)

Altera Max V [CPLD](https://en.wikipedia.org/wiki/Complex_programmable_logic_device)   
 Leveraging the successful MAX® II architecture, MAX® V devices combine instant-on, non-volatile CPLD characteristics with advanced features typically found in FPGAs, such as phase-locked loops \(PLLs\), on-chip memory, and internal oscillators.   
 The MAX V CPLD architecture includes an array of logic elements \(LEs grouped in logic array blocks \(LABs\)\), memory resources \(non-volatile flash and LE RAM\), digital PLLs, global signals \(clocks or control signals\), and a generous amount of user I/Os. The MultiTrack interconnect is designed to maximize performance and minimize power by using the most efficient, direct connection from input to logic to output. Find more details about the MAX® V architecture in the MAX® V Device Family Data Sheet \(PDF\).   


* Up to 50% lower total power compared to equivalent density competitive CPLDs, generating less heat and saving battery power.
* Replaces an external discrete timing devices for use as a simple clocking source, saving BOM costs.
* Power on and reset quickly \(500 µs or less\), ideal for power management, power sequencing, and monitoring of other devices on the PCB.
* Allow you to update a second configuration image while the CPLD is in operation.
* I/Os are hot-socket compliant and support LVTTL, LVCMOS, PCITM, and LVDS output interface standards, along with other bus-friendly options \(e.g. output enable per pin, Schmitt triggers, slew rate control, and others\).
* The on-chip JTAG block can configure external non-JTAG-compliant devices, such as discrete flash memory devices, using the Parallel Flash Loader IP Megafunction.

 [![apertus](https://www.intel.com/content/dam/www/public/us/en/images/programmable/16x9/maxv-architecture-fig1-16x9.jpg.rendition.intel.web.720.405.jpg?raw=true)](https://www.apertus.org/axiom-beta)   
 The MAX® V CPLD architecture supports MultiVolt I/O functionality, allowing different I/O banks to operate with different I/O voltages to seamlessly connect to other devices. The device core is powered by a single 1.8-V external supply \(VCCINT\), providing CPLD functionality with low dynamic and stand-by power.   


  
   
 [Datasheet](https://www.st.com/resource/en/datasheet/stm32f103rc.pdf)   
   
   
   


## CPLD \(Complex programmable logic device

