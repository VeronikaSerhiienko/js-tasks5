var car1 = new Car('toyota', '1995','34000', 'red', false, '6');
console.log(car1);
var car2 = new Car('bmw', '1990','374000', 'blue', true, '3');
console.log(car2);
var car3 = new Car('audi', '1998','78900', 'green', true, '10');
console.log(car3);

car2.ignition();
car2.start();
car2.stop();
car2.isPetrol();
car2.toTankUp();

function Car(brand, yearRelease, mileage, color, isIgnition, amountPetrol) {
  this.brand = brand;
  this.yearRelease = yearRelease;
  this.mileage = mileage;
  this.color = color;
  this.isIgnition = isIgnition;
  this.amountPetrol = amountPetrol;

  this.ignition = function() {
    this.isIgnition = true;
  };

  this.start = function() {
    if (this.isIgnition) {
      console.log(this.color.slice(0,1).toUpperCase() + this.color.slice(1).toLowerCase()  + " car " + this.brand +" has run!");
    } else {
      console.log("Turn on ignition first!");
    }
  };

  this.stop = function() {
    if (this.isIgnition) {
      this.isIgnition = false;
      console.log("Car has stopped");
    } else {
      console.log("Ignition was turned off");
    }
  };
  
  this.isPetrol = function() {
    if (this.amountPetrol > 0) { 
      this.ignition(); 
    } else {
      console.log("Petrol tank is empty");
    }
  };

  this.toTankUp = function() {
    this.amountPetrol = 10;
    console.log("Car is tanked up");
  };
}