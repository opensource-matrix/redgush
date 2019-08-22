var colors = require('colors');

function log(...args) {
    var out = ['[REDGUSH]'.red];
    args.forEach((elem) => {
        out.push(elem);
    })
    console.log(out.join(' '));
}

module.exports = log;