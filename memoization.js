
// let res = 0;
// function product(num1,num2){
// for(let i=0;i<50000000;i++){
//  res =  num1*num2
// }
// return res;
// }
function sum(x){
    return x*x;
}

function myMemo(call){
let cache = {};
return function(...args){
    if(cache[args]){
        console.log("in cache")
        return cache[args];
    }
    else{
        console.log("calculating")
        let result = call(args)
        cache[args] = result;
        return result;
    }
}
}

const betterFunction = myMemo(sum);
console.log(betterFunction(9))
console.log(betterFunction(9))
console.log(betterFunction(9))