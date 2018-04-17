const numberModule = require('./number-module.js');
const numberArray = require('./number-array.js'); // an array
// ./ (dot whack) is to signify that the module is within this directory

console.log(numberModule);

const addinator = require('./addinator.js'); // a function

console.log(addinator(numberArray));

// create a killer whale (scary) creature
// log that creature

const creature = require('./creature.js'); // a class

const killerWhale = new creature('Killer Whale', 'Scary');

console.log(killerWhale);

const multipleThings = require('./multiple-things'); // an object

console.log(multipleThings);