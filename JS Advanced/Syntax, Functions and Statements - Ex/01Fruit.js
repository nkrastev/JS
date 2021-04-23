function fruits(type, grams, price){
    let total = grams / 1000 * price;
    console.log(`I need $${total.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${type}.`)
}