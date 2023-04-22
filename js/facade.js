class CPU {
  start() {
    // start the CPU
    console.log('start the CPU')
  }
  stop() {
    // stop the CPU
    console.log('stop the CPU')
  }
}
class Memory {
  load() {
    // load data into memory
    console.log('load data into memory')
  }
  unload() {
    // unload data from memory
    console.log('unload data from memory')
  }
}
class HardDrive {
  read() {
    // read data from hard drive
    console.log('read data from hard drive')
  }
  write() {
    // write data to hard drive
    console.log('write data to hard drive')
  }
}
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }
  start() {
    this.cpu.start();
    this.memory.load();
    this.hardDrive.read();
  }
  stop() {
    this.cpu.stop();
    this.memory.unload();
    this.hardDrive.write();
  }
}

const computer = new ComputerFacade();
computer.start(); // outputs "start the CPU", "load data into memory", "read data from hard drive"
computer.stop(); // outputs "stop the CPU", "unload data from memory", "write data to hard drive"
