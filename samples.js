// app.js

// fork
const { fork } = require('child_process');
const forked = fork('child.js');

forked.on('message', (msg) => {
  console.log('Message from child', msg);
});

forked.send({ hello: 'world' });

// child_process.js
process.on('message', (msg) => {
  console.log('Message from parent:', msg);
});

let counter = 0;

setInterval(() => {
  process.send({ counter: counter++ });
}, 1000);


// spawn
const { spawn } = require('child_process');
const child = spawn('pwd');
const child1 = spawn('wc');

child.on('exit', function (code, signal) {
  console.log('child process exited with ' +
              `code ${code} and signal ${signal}`);
});

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});

process.stdin.pipe(child1.stdin)

child1.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

// exec
// server.js
var http = require('http');
var visits = 0;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    visits += 1;
    var msg = 'Visits: ' + visits;
    res.end(msg + '\n'); console.log(msg);
    if(visits == 5) {
        process.exit();
    }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

// script.js
var exec = require('child_process').exec;
exec('node ./server.js', function(error, stdout, stderr) {
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
    if (error !== null) {
        console.log('exec error: ', error);
    }
});


// exec 2
var exec = require('child_process').exec;
var child = exec('node ./commands/server.js');
child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.on('close', function(code) {
    console.log('closing code: ' + code);
});



sp1.send({ msg: "hello from app.js 2" })
sp1.send({ msg: "hello from app.js 3" })
