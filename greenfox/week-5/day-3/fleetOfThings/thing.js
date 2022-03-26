class Thing {

    constructor(name) {
      this.name = name;
      this.completed = false;
    }
  
    complete() {
      this.completed = true;
    }
  
    getName() {
      return this.name;
    }
  
    getCompleted() {
      return this.completed;
    }
  
    toString() {
      return `[${this.completed ? 'x' : ' '}] ${this.name}\n`;
    }
  }
  
  export { Thing };