var element = require('./lib/element.js');
var script = require('./lib/script.js');
var port = require('./lib/port.js');
var join = require('./lib/join.js');

/* Jeremy's Website */
var header = new element('h1');
header.text = 'Jeremy is (sometimes) awesome!';

var para = new element('p');
para.text = `Hello, world!  I am not Jeremy that is writing this, but hello anyway!`;

var body = join('body', header, para);

var port = new port();
port.src(myBody)
    .dest('./index.html')
    .pipe();