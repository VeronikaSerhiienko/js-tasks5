var car1 = new Car('toyota', '1995','34000', 'red', false, '6');
console.log(car1);
var car2 = new Car('bmw', '1990','374000', 'blue', true, '3');
console.log(car2);
var car3 = new Car('audi', '1998','78900', 'green', true, '10');
console.log(car3);

function Car(brand, yearRelease, mileage, color, isIgnition, amountPetrol) {
  this.brand = brand;
  this.yearRelease = yearRelease;
  this.mileage = mileage;
  this.color = color;
  this.isIgnition = isIgnition;
  this.amountPetrol = amountPetrol;
}