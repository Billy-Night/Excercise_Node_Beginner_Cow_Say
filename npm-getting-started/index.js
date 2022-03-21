const information = require('./information');
console.log(`Hi, my name is ${information.Name} and I'm studying in the ${information.Campus} campus.`);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Sorry this weird cows been following me",
    e : "oO",
    T : "U "
}));
