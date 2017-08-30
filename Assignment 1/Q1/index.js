// Implementation of setTimeout function
// cb is callback function
// this function waits for atleast "n" milliseconds before calling the callback function.
function setTimeOutSync(cb , n){
    var startTime = new Date().getTime();
    for(var i =0; i < 1e7 ; i++){
        if((new Date().getTime - startTime) > n)
            break;
    }
    cb();
}

// callback function which just printing something onto the console.
function cb(){
    console.log('From callback function');
}

// calling setTimeOutSync function
setTimeOutSync(cb ,100);

