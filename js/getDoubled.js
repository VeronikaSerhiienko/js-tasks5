'use strict';

var info = {
  number: '2',
  title: 'report',
};

var info1 = {
  number: '25',
  title: 'reports',
};

console.log(getDoubled.call(info));
console.log(getDoubled.call(info1));

console.log(getDoubledTrippled(getDoubled.call(info)));
console.log(getDoubledTrippled(getDoubled.call(info1)));

function getDoubled() {
  return this.number * 2;
}

function getDoubledTrippled(n) {
  return n * 3;
}