// Arrays that hold the ingredients for a milkhake
let toppings = ['chocolate chips', 'M&M`s', 'oreo', 'cookie dough', 'sprinkles']
let iceCream = ['chocolate', 'vanilla', 'strawberry','raspberry', 'coconut']
let syrup = ['chocolate', 'hazelnut', 'strawberry', 'cookies n` cream']


// These variables grab the HTNL elements needed to interact with the DOM
const shek = document.getElementById("urshake");
const whip = document.getElementById("myshake");

// This function will be called when the button is clicked

function yourShake () {
// This will grab a random element from each array
const randTopping = toppings[Math.floor(Math.random() * toppings.length)];
const randIceCream = iceCream[Math.floor(Math.random() * iceCream.length)];
const randSyrup = syrup[Math.floor(Math.random() * syrup.length)];
//This will print a random milkshake using the ingredients from the Arrays.
whip.innerHTML = `I think today i'll have a ${randIceCream} ice cream with ${randTopping} topping and ${randSyrup} syrup milkshake!`;

// After the button is initially clicked, the trext inside will chanmge to this.
document.querySelector('button').innerHTML = 'Get another milkshake!'
}

// When the button is clicked, the function above will run
shek.onclick = yourShake;