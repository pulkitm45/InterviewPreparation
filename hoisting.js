//Hoisting is process in which the declarations of variables and functions are moved to top of their respective scope. Actually during the compilation phase, the memory is allocated to the variables but their values are not initialised only when the lines are executed. Before the execution of specific lines, the value will be undefined in case of var, in case of let and const, they are also hoised but they fall under temporal dead zone so when they are accessed before their initialization, they give reference error. in temporal zone, the values are inaccessible. TDZ is space between, global scope and variable intialization.


console.log(a) // this will give result as undefined. Var is hoisted at top
 
var a = 10; 

console.log(b) //this will give reference error, cannot access b before intialization, so if u see the error program is knowing that b is defined in the code somewhere.
let b =10

console.log(c) //this will give reference error, cannot access b before intialization, so if u see the error program is knowing that b is defined in the code somewhere.
const  c = 10

//Functions
//Functions are also hoisted at top of global scope and they can be accessed even before the initialization.

fun1() // this will print "Hi"

function fun1(){
    console.log("Hi")
}

fun2() //This will give reference error, because arrow functions are not hoisted

let fun2 = ()=>console.log("Hello")