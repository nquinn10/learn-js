this.firstName = 'Han'; // refers to window object - parent of all objects
this.lastName = 'Ku';
const person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5544,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(person.fullName());