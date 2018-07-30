function countTime(sec){
    var days = Math.floor(sec / 86400);
    var leftHours = sec % 86400;
    if (leftHours == 0){
        return days + ' days '; 
        }
        else {
        var hours = Math.floor(leftHours / 3600);
        var leftMinutes = leftHours % 3600;
        if (leftMinutes == 0){
            return hours + ' h';  
            console.log(sec);    
        } else if (leftMinutes > 0){
            var minutes = Math.floor(leftMinutes / 60);
            var seconds = leftMinutes % 60
            if (seconds == 0){
                return days + ' days ' + hours + ' h, ' + minutes + ' min.'
            } else {
                return days + ' days, '+ hours + ' h, ' + minutes + ' min, ' + seconds +' sec.';
            }
        }   
    }   
};

exports.print = countTime;
