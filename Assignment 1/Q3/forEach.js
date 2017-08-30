function implements_forEach(arr , cb){
    for(i = 0; i < arr.length; i++){
        cb(arr[i]);
    }
}

function forEach(n){
    console.log(n*n);
}

var arr = [1, 2, 3, 4, 5];
implements_forEach(arr , forEach);