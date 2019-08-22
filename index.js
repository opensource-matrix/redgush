var element = require('./lib/element.js');
var script = require('./lib/script.js');

var myScript = new script();

myScript.setFunction(function hello() {
    console.log('Hello, world!');
})

var myDiv = new element('div');
myDiv.text = myScript;
myDiv.attributes.id = 'amazing-div-element';

console.log(myDiv.compileHTML());