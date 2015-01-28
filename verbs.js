var lodash = require('lodash');

var verbs = [
    'run',
    'jump',
    'eat',
    'drink',
    'text',
    'code',
    'sleep',
    'leave',
    'rage',
    'program',
    'smash',
    'assign',
    'smoke',
    'lick',
    'cuddle'
    ];

module.exports = {};
module.exports.get = function(){
    return lodash.sample(verbs);
};