var element = require('./element');
var script = require('./script');
var log = require('./log');
var fs = require('fs');

class port {
    constructor() {
        this.in = new element('div');
        this.out = ''
    }
    src(elem) {
        if(!elem instanceof element || !elem instanceof script) {
            log('port.src()', 'Needs an element as a value.');
            process.exit(1);
        }
        this.in = elem;
        return this;
    }
    dest(elem) {
        if(typeof elem !== 'string') {
            log('port.dest()', 'Needs a path as a value.');
            process.exit(1);
        }
        this.out = elem;
        return this;
    }
    pipe() {
        if(this.out == '') {
            log('port.pipe()', 'Path never defined!');
            process.exit(1);
        }
        var data = this.in.compileHTML();
        fs.writeFileSync(this.out, data);
        return this;
    }
}

module.exports = port;