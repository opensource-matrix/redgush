var element = require('./element')
var script = require('./script')

function join(wrapper, ...elems) {
    var joined = '';
    var newElem = new element(wrapper);
    elems.forEach((elem) => {
        if(elem instanceof element || elem instanceof script) {
            newElem.text += elem.compileHTML();
        } else {
            log('join()', 'Needs an array list of elements to join.');
            process.exit(1);
        }
    })
    return newElem;
}

module.exports = join;