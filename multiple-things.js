const Creature = require('./creature');

// create mantis shrimp
const mantisShrimp = new Creature('mantisShrimp', 'badass' );

// create fish
const fish = new Creature('clownfish', 'nemo');
module.exports = {
    mantisShrimp: mantisShrimp,
    fish: fish,
    number: 8,
    someString: 'for example'
};