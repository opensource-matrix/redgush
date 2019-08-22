var log = require('./log')

class element {
    attributes = {};
    style = {};
    text = '';
    constructor(tag) {
        if(typeof tag !== 'string') {
            log('new element(tag)'.magenta, 'takes a string, not', typeof tag);
            process.exit(1);
        }
        this.tag = tag;
    }
    compileHTML() {
        var keysAttr = Object.keys(this.attributes);
        var keysStyle = Object.keys(this.style);

        if(this.text instanceof element) {
            this.text = this.text.compileHTML();
        }

        if(keysAttr.length == 0 && keysStyle.length == 0) {
            return ('<' + this.tag + '>' + this.text + '</' + this.tag + '>');
        } else if(keysAttr.length !== 0 && keysStyle.length == 0) {
            var attrs = [];
            keysAttr.forEach((attr) => {
                var str = attr + '="';
                str += this.attributes[attr] + '"';
                attrs.push(str);
            })
            return ('<' + this.tag + ' ' + attrs.join(' ') + '>' + this.text + '</' + this.tag + '>');
        } else if(keysAttr.length == 0 && keysStyle.length !== 0) {
            var attrs = [];
            keysStyle.forEach((attr) => {
                var str = attr + ':';
                str += this.style[attr];
                attrs.push(str);
            })
            return ('<' + this.tag + ' style="' + attrs.join(';') + '">' + this.text + '</' + this.tag + '>');
        } else {
            var attrs = [];
            keysAttr.forEach((attr) => {
                var str = attr + '="';
                str += this.attributes[attr] + '"';
                attrs.push(str);
            })
            var styles = [];
            keysStyle.forEach((attr) => {
                var str = 'attr:';
                str += this.style[attr];
                styles.push(str);
            })
            return ('<' + this.tag + ' style="' + styles.join(';') + '"' + ' ' + attrs.join(' ') + '>' + this.text + '</' + this.tag + '>');
        }
    }
}

module.exports = element;