var element = require('./lib/element.js');
var script = require('./lib/script.js');
var port = require('./lib/port.js');
var join = require('./lib/join.js');

/* Simple static web page. */
var myDiv = new element('div');
myDiv.style.id = 'scripty';
myDiv.text = 'Hello, world!';

var myScript = new script();
myScript.setFunction(function name() {
    console.log('Hello, world!')
});

var myBody = join('body', myDiv, myScript);

var port = new port();
port.src(myBody)
    .dest('./index.html')
    .pipe();