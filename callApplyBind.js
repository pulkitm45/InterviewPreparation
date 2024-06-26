//These 3 do the exact same thing, call and bind are exact same. Bind returns a new method. Call takes arguments with comma and apply takes arguments in array.

//The call, bind, apply are used in js to manipulate how a function is invoked and set the value of this within the function

//The Call method is used to invoke a function with a specified value and arguments provided individually.

//This helps in function borrowing for example, if we need to access a method of an object from another object.
//Call and apply are executed there itself but bind can be used to execute a function later

function say(param){
    console.log(param + " " + this.name)
}

let obj = {
    name:"Pulkit"
}
say.call(obj,"Hello") //obj will be the this value and hello will be the argument

//The Apply method is similar to the call method but it accepts argument as an array

function say1(param){
    console.log(param + " " + this.name)
}

let obj1 = {
    name:"Pulkit"
}
say1.apply(obj1,["Hello"]) //obj will be value of this and hello will be passed in array as argument.

//Call takes multiple arguments separately whereas in apply they can be given as array
//say1.apply(obj1,["Hello","Take Care"])
//say1.call(obj1,"Hello","Take Care")

//The Bind is used to create a new function where the value of this will be permanently set to that object

function say2(param){
    console.log(param + " " + this.name)
}

let obj2 = {
    name:"Pulkit"
}
let bindFunc = say2.bind(obj2) //this will be set to obj2
bindFunc("Hello") //This will take hello as argument

//Example: 
const obj3 = {
    name: "Nikhil",
    sayHi() {
        console.log(this.name)
    }
}

const obj4 = {
	name: 'Pulkit'
}


obj3.sayHi.call(obj4, a, b);