//Spread operator is used to expand the array into individual elements
//Array

const abc = [1,2,3,4,5];
console.log(...abc);

const a = [1,2,3,4,5];
const b = [...a];
console.log(a);
b.pop()
console.log(b) 



//Object
const obj1 = {name:"Pulkit",role:"dev"}
const obj2 = {...obj1}
obj2.name = "Girish"
console.log(obj1)
console.log(obj2)

//REST Parameter
//used to handle infinite arguements passed to a function.
//It makes all arguements as array.

function abc(...args){
    let res = args.map(item=>item*2)
    console.log(res)
    }
    
    abc(10,2,3,4)