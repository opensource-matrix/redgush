var element = require('./lib/element.js');
var script = require('./lib/script.js');
var port = require('./lib/port.js');

var myScript = new script();

myScript.setFunction(function hello() {
    console.log('Hello, world!');
})

var myDiv = new element('div');
myDiv.text = myScript;
myDiv.attributes.id = 'amazing-div-element';

var myBody = new element('body');
myBody.attributes.id = 'body-nav';
myBody.style.backgroundColor = 'black';
myBody.style.color = 'white';

var port = new port();
port.src(myBody)
    .dest('./index.html')
    .pipe();