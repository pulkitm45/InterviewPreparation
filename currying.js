//Currying is process of passing data to functions inside a functions i.e closures. Every function should only take 1 argument
//Advantages -- Dont need to call outer function again and again.

//Example :

// function fun1(x){
//     return function fun2(y){
//         return x+y;
//     }
// }

// console.log(fun1(10)(20)) //currying

// console.log(fun1(1,2)) //Not currying




// const users = {
//     firstName : "Pulkit",
//     lastName : "Mahajan",
//     city : "Amritsar"
// };

// const fun = (users) =>{
//     return key => users[key];
// }

// console.log(fun(users)("firstName"))

//Unlimited Currying

function currying(a){
    return function(b){
        if(b) return currying(a+b);
        return a;
    }
}

console.log(currying(6)(7)(6)(6))