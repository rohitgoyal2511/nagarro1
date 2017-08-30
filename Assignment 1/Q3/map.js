// function which calls map function
function implements_forEach(cb){
    for(i = 0; i < arr.length; i++){
        cb(i);
    }
    console.log(arr);
}

// callback map function
// returning destructive array every time it call
function map(i){
    arr[i] = arr[i] * arr[i];
    return arr;
}

var arr = [1, 2, 3, 4, 5];
implements_forEach(map);