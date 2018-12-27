var city1 = new City('Chicago', '17000','USA');
var city2 = new City('Kyiv', '67000', 'Ukraine');
var city3 = new City('Milan', '99975', 'Italy');

console.log(city1);
console.log(city1.getPopulation());
console.log(city1.getCityName());
console.log(city1.addCitizen());
console.log(city2);
console.log(city3);

function City(name, population, country) {
  this.name = name;
  this.population = population;
  this.country = country;
  this.getPopulation = function() {
    return this.population;
  };
  this.getCityName = function() {
    return this.name;
  };
  this.addCitizen = function() {
    return this.population + 1;
  };
}