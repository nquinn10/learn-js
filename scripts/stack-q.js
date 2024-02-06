class PStack {
  #id; // how to add private property
  // private properties are not accessible from outside the class
  // including child classes
  constructor() {
    this.#id = Math.floor(Math.random() * 100) + 1;
  }

  // private method not avilable to child classes
  #showId() { // can also define private method - not accessible outside of class only methods inside
    console.log(this);
    return this.#id;
  }

  push(p) { // child class would be responsible for implementing
    // implement in child class
  }

  pop() {
    // implement in child class
  }

}

class PStackImpl extends PStack {
  #persons = []
  constructor() {
    super();
  }

  showId() {
    console.log(this);
    return this.#id;
  }

  push(p) {
    return this.#persons.push(p)
  }

  pop() {
    return this.#persons.pop().age
  }

  show() {
    return this.#persons
  }

}

let pstack = new PStackImpl();
pstack.push({name: 'Jojo', age: 21});
pstack.push({name: 'Gabi', age: 29});
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.show());
console.log(pstack.showId());
