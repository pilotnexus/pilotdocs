### MCU \(Microcontroller unit\)

STM32F103RC [MCU](https://en.wikipedia.org/wiki/Microcontroller)   


![alt text](/images/MCU/STM32F103RC.jpg "STM32F103xC MCU")


The STM32F103xC, STM32F103xD and STM32F103xE performance line family incorporates the high-performance ARM® Cortex®-M3 32-bit RISC core operating at a 72 MHz frequency, high-speed embedded memories \(Flash memory up to 512 Kbytes and SRAM up to 64 Kbytes\), and an extensive range of enhanced I/Os and peripherals connected to two APB buses. All devices offer three 12-bit ADCs, four general-purpose 16-bit timers plus two PWM timers, as well as standard and advanced communication interfaces: up to two I2Cs, three SPIs, two I2Ss, one SDIO, five USARTs, an USB and a CAN.   


The STM32F103xC/D/E high-density performance line family operates in the –40 to +105 °C temperature range, from a 2.0 to 3.6 V power supply. A comprehensive set of power-saving mode allows the design of low-power applications.   


* Core: ARM® 32-bit Cortex®-M3 CPU
  * 72 MHz maximum frequency, 1.25 DMIPS/MHz \(Dhrystone 2.1\) performance at 0 wait state memory access
  * Single-cycle multiplication and hardware division
* Memories
  * 256 to 512 Kbytes of Flash memory
  * up to 64 Kbytes of SRAM
  * Flexible static memory controller with 4 Chip Select. Supports Compact Flash, SRAM, PSRAM, NOR and NAND memories
  * LCD parallel interface, 8080/6800 modes
* Clock, reset and supply management
  * 2.0 to 3.6 V application supply and I/Os
  * POR, PDR, and programmable voltage detector \(PVD\)
  * 4-to-16 MHz crystal oscillator
  * Internal 8 MHz factory-trimmed RC
  * Internal 40 kHz RC with calibration
  * 32 kHz oscillator for RTC with calibration
* Low power
  * Sleep, Stop and Standby modes
  * VBAT supply for RTC and backup registers
* 3 × 12-bit, 1 μs A/D converters \(up to 21 channels\)
  * Conversion range: 0 to 3.6 V
  * Triple-sample and hold capability
  * Temperature sensor
* 2 × 12-bit D/A converters
* DMA: 12-channel DMA controller
  * Supported peripherals: timers, ADCs, DAC, SDIO, I2Ss, SPIs, I2Cs and USARTs
* Debug mode
  * Serial wire debug \(SWD\) & JTAG interfaces
  * Cortex®-M3 Embedded Trace Macrocell™
* Up to 112 fast I/O ports
  * 51/80/112 I/Os, all mappable on 16 external interrupt vectors and almost all 5 V-tolerant
* Up to 11 timers
  * Up to four 16-bit timers, each with up to 4 IC/OC/PWM or pulse counter and quadrature \(incremental\) encoder input
  * 2 × 16-bit motor control PWM timers with dead-time generation and emergency stop
  * 2 × watchdog timers \(Independent and Window\)
  * SysTick timer: a 24-bit downcounter
  * 2 × 16-bit basic timers to drive the DAC
* Up to 13 communication interfaces
  * Up to 2 × I2C interfaces \(SMBus/PMBus\)
  * Up to 5 USARTs \(ISO 7816 interface, LIN, IrDA capability, modem control\)
  * Up to 3 SPIs \(18 Mbit/s\), 2 with I2S interface multiplexed
  * CAN interface \(2.0B Active\)
  * USB 2.0 full speed interface
  * SDIO interface
* CRC calculation unit, 96-bit unique ID
* ECOPACK® packages



These features make the STM32F103xC/D/E high-density performance line microcontroller family suitable for a wide range of applications such as motor drives, application control, medical and handheld equipment, PC and gaming peripherals, GPS platforms, industrial applications, PLCs, inverters, printers, scanners, alarm systems video intercom, and HVAC.



[Datasheet](https://www.st.com/resource/en/datasheet/stm32f103rc.pdf)