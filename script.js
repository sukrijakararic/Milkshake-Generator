// Arrays that will be randomly selected
let toppings = ['chocolate chips', 'M&M`s', 'oreo', 'cookie dough', 'sprinkles']
let iceCream = ['chocolate', 'vanilla', 'strawberry','raspberry', 'coconut']
let syrup = ['chocolate', 'hazelnut', 'strawberry', 'cookies n` cream']


// Code that will randomly seclect certain items from the array above
const randTopping = toppings[Math.floor(Math.random() * toppings.length)];
const randIceCream = iceCream[Math.floor(Math.random() * iceCream.length)];
const randSyrup = syrup[Math.floor(Math.random() * syrup.length)];

//This will print a random milkshake using the ingredients from the Arrays.
console.log(`I think today i'll gave a ${randIceCream} ice cream with ${randTopping} topping and ${randSyrup} syrup!`);