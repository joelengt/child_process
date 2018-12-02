var fork = require('child_process').fork // It will be creating a new process for nodejs

var sp1 = fork('child_process.js')
sp1.send({ msg: "hello from app.js" })
