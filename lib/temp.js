var element = require('./element');
var script = require('./script');
var log = require('./log');
var fs = require('fs');

class temp {
    constructor() {
        this.in = new element('div');
        this.n = '';
    }
    src(elem) {
        if(!elem instanceof element || !elem instanceof script) {
            log('temp.src()', 'Needs an element as a value.');
            process.exit(1);
        }
        this.in = elem;
        return this;
    }
    pipe() {
        if(this.out == '') {
            log('temp.pipe()', 'Path never defined!');
            process.exit(1);
        }
        var data = this.in.compileHTML();
        this.n = ('temp-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + '.html');
        fs.writeFileSync(this.n, data);
        return this.n;
    }
    delete() {
        if(this.n == '') {
            log('temp.delete()', 'Never made temporary file.');
            process.exit(1);
        }
        fs.unlinkSync(this.n);
    }
}

module.exports = temp;