"use strict";
class Human {
  constructor(name = "unknown", age = 0, iq = 0) {
    this.name = name;
    this.age = age;
    this.iq = iq;
  }

  isSmart() {
    return this.iq > 100;
  }

  isNameless() {
    return this.name === "unknown" || this.name === "";
  }

  beSmarter() {
    this.iq += 20;
  }
}

let human = new Human();
let human2 = new Human("Laci", 18, 110);
human2.beSmarter();

human.name = "Hector";
human.age = 1;
human.beSmarter();

if (human2.isSmart()) {
  console.log(`${human.name} okos, az iq-ja: ${human.iq}`);
}

if (!human.isSmart()) {
  console.log(`${human2.name}sokat tanult, ezért az IQ-ja: ${human2.iq}`);
}
