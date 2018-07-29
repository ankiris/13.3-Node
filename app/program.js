var os = require('os');
var OSinfo = require('../modules/OSInfo');
var OSinfo = require('../modules/tellTime');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        if(isNaN(input)) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/nod':
                process.stdout.write(+process.env.node+'\n');
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default: 
                process.stderr.write('Wrong instruction!\n');
        }
        }   
        else {
            tellTime.print(input);
        }
    } 
});

