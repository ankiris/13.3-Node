var os = require('os');

function countTime(sec){
    var hours = sec / 3600
    var leftMinutes = sec % 3600
    if (leftMinutes = 0){
        process.stdout.write(+hours+ 'h');      
    } else if (leftMinutes > 0){
        var minutes = leftMinutes / 60
        var seconds = leftMinutes % 60
        if (seconds = 0){
            process.stdout.write(+hours+ ' h, '+minutes+' min.');
        } else {
            process.stdout.write(+hours+ ' h, '+minutes+' min, '+seconds+' sec.'  );
        }
    }          
};

exports.print = countTime;