var lodash = require('lodash');

var adjectives = [
    'elitist',
    'short',
    'great',
    'evil',
    'wiley',
    'shady',
    'unbearable',
    'tall',
    'presumptuous',
    'addicting',
    'afraid',
    'agreeable',
    'amused',
    'ancient',
    'angry',
    'annoyed',
    'anxious',
    'arrogant',
    'ashamed',
    'average',
    'awful',
    'bad',
    'beautiful',
    'better',
    'big',
    'bitter',
    'black',
    'blue',
    'boiling',
    'brave',
    'breezy',
    'crafty',
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(adjectives);
};