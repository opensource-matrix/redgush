var element = require('./element');
var log = require('./log');

class script extends element {
    constructor() {
        super('script');
    }
    setFunction(fn) {
        if(typeof fn == 'function') {
            this.text = fn.toString();
            if(fn.name !== '') {
                this.text += '\n' +
                    fn.name + '.call({})';
            } else {
                log('script.setFunction()', 'requires a function with a name.');
                process.exit(1);
            }
        }
        return this;
    }
}

module.exports = script;