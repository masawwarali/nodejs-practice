spawn() Method:

Purpose: The spawn() method is used to launch a new process and execute a command in that process.
Usage: It allows running commands as separate processes, similar to executing commands in a terminal or command prompt


const { spawn } = require('child_process');
const ls = spawn('ls', ['-l', '-a']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});



fork() Method:

Purpose: The fork() method is a special case of spawn() designed specifically for creating child Node.js processes.
Usage: It's primarily used for creating new instances of the Node.js application itself as child processes.
Features:
Designed for running separate instances of Node.js, allowing communication between the parent and child processes 
via inter-process communication (IPC)


const { fork } = require('child_process');
const child = fork('child.js');

child.on('message', (message) => {
  console.log(`Received message from child: ${message}`);
});

child.send('Hello from parent!');




Key Difference:

spawn() is used for executing external commands or processes.
fork() is used to create child Node.js processes, specifically for running separate instances of Node.js code.
Choose between spawn() and fork() based on whether you want to execute external commands (use spawn()) 
or create child Node.js processes 
(use fork() for better communication between Node.js processes).