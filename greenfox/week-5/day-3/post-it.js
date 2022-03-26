/*
Készíts egy PostIt osztályt, aminek a következők a tagváltozói:
backgroundColor
text
textColor
Készíts néhány példa post-it objektumot:
egy narancssárgát kék szöveggel: "Egy, megerett a meggy"
egy rózsaszínt fekete szöveggel: "Ketto, csipkebokor vesszo"
egy sárgát zöld szöveggel: "1 liter tej!"
*/

class PostIt {
  constructor(backgroundColor, text, textColor) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

const postIt1 = new PostIt("orange", "Egy, megerett a meggy", "blue");
const postIt2 = new PostIt("pink", "Ketto, csipkebokor vesszo", "black");
const postIt3 = new PostIt("yellow", "1 liter tej!", "green");

console.log(postIt1);
console.log(postIt2);
console.log(postIt3);
