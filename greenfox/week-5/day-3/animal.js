/* Készíts egy Animal osztályt
Minden állatnak van egy hunger (éhség) értéke, ami egy egész szám
Minden állatnak van egy thirst (szomjúság) értéke, ami egy egész szám
Amikor létrehozol egy új állat példányt, ezeknek az értékei alapból legyenek 50
Minden állat tud enni (eat()), ami csökkenti az éhségét eggyel
Minden állat tud inni (drink()), ami csökkenti a szomjúságát eggyel
Minden állat tud játszani (play()), ami mindkét értéket növeli eggyel */

class Animal {
  constructor(hunger, thirst) {
    this.hunger = hunger;
    this.thirst = thirst;
  }
  eat() {
    this.hunger -= 1;
  }

  drink() {
    this.thirst -= 1;
  }

  play() {
    this.hunger += 1;
    this.thirst += 1;
  }
}

const cat = new Animal(50, 50);
cat.eat();
console.log(cat);

const dog = new Animal(50, 50);
dog.drink();
console.log(dog);

let hamster = new Animal(50, 50);
hamster.play();
console.log(hamster);
