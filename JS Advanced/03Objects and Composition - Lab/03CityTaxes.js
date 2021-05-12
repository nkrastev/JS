function cityTaxes(name, population, treasury){

    const city=
        {
            name: name,
            population:population,
            treasury: treasury,
            taxRate :10,
            collectTaxes: function () { return Math.floor(this.treasury+=this.population*this.taxRate);},
            applyGrowth: function (percentage){return Math.floor(this.population+=percentage/100*this.population);},
            applyRecession: function (percentage) {return Math.floor(this.treasury-=percentage/100*this.treasury);}
        }

    return city;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

