const o = {
    msg: 'An object',
    person: {
        firstName: 'Grace',
        lastName: 'Hopper',
        age: 89,
        fullName: () => { return this.firstName + ' ' + this.lastName }
        // arrow function - does not have name
        // if change to function() - it will work
        // when we use regular function this binds to function
        // when using arrow it binds to surrounding scope and we do not have a this.firstname
        // if add this.firstName =  and this.lastName = then it will work
        // if we want to execute function outside of its immediate scope, use arrow function
        // otherwise use function()
    }
}

let x = o.person.fullName();
console.log(x);
  
