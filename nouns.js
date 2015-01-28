var lodash = require('lodash');

var nouns = [
    'man',
    'bear',
    'pig',
    'machete',
    'Emu',
    'Ibex',
    'Kyle\'s Baldspot',
    'aardvark',
    'synergies',
    'airbud2 golden receiver',
    'Kyle',
    'Miles',
    'joint degrees',
    'ecosystem services',
    'first years',
    'foresters',
    'climate change',
    'Glenn Beck',
    'hectares',
    'foofter',
    'Edward snow day',
    'Barry Nalebuff',
    'Gordon\'s vocal chords',
    'Toyota Corolla',
    'battleship',
    'Pikachu',
    'copernicus',
    'lumbersexual',
    'naked mole rat',
    'Sherri Scully',
    'Ted The Man Snyder',
    'Storm Juno',
    'Windows OS',
    'iPhone',
    'Killington',
    'Ronnel A Higgins',
    'Evans Hall',
    'PWG',
    'Tight and Bright Outfit',
    'New SOM Grading Scheme',
    'Master Debator',
    'Snow Day',
    'Snowpocalypse',
    'Military Grade Laptop'
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(nouns);
};