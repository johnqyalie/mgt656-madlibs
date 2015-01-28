var lodash = require('lodash');

var adjectives = [
    'short',
    'crafty',
    'wiley',
    'sassy',
    'slick',
    'rotund',
    'crazy',
    'funny',
    'bougie',
    'obtuse',
    'bald',
    'cute'
];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(adjectives);
};