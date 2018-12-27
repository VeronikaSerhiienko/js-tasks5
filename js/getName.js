'use strict';
var person = {
  name: 'vasya',
  age: '23',
};

console.log(getName.call(person));
console.log(getName());

function getName() {
  return this.name;
}