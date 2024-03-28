
// let res = 0;
// function product(num1,num2){
// for(let i=0;i<50000000;i++){
//  res =  num1*num2
// }
// return res;
// }

let res=0;
function sum(a,b){
    for(let i = 0;i<10;i++){
       res  = a+=i+b;
    }
    return res;
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
        let res = call(args)
        cache[args] = res;
        return res;
    }
}
}

const betterFunction = myMemo(sum);
console.log(betterFunction(10,20))
console.log(betterFunction(10,20))