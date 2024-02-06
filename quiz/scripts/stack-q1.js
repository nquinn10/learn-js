class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  get persons() {
    return this._persons;
  }

  set persons(persons) {
    // creating property called persons that we can set and get from
    this._persons = persons;
  }
  push(p) {
    return this._persons.push(p)
  }

  pop() {
    return this._persons.pop().age
  }
}

let pstack = new PStackImpl();
// cant assign this array to pstack.persons - trying to define field persons
// need to add get and set methods
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}] // calls new set method
pstack.push({name: 'Dein', age: 19}); // when this._persons gets instantiated
console.log(pstack.pop());
console.log(pstack.pop()); // when we do a second pop - it causes an error since theres only 1 item
console.log(pstack.persons);
