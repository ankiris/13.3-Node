var os = require('os');
var tellTime = require('./tellTime');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    var time = tellTime.print(uptime)

    console.log('System:'.grey, type);
    console.log('Release:'.green, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime: ~'.red, time);
    console.log('User name:'.gray, userInfo.username);
    console.log('Home dir:'.cyan, userInfo.homedir);
}

exports.print = getOSinfo;
