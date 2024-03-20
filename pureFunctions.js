//Pure functions are the functions which are predictable, which means whenever you call that function with same input, it should give same output. It should not have any side effects like no console logs no changing of global variables.


//Example Pure Function

const fun = (name) =>{
    return `Hello ${name}`
}

console.log(fun("Pulkit"))
console.log(fun("Pulkit"))
console.log(fun("Pulkit"))

//Example Impure Function

let greeting = "Good Morning"

const fun2 = (name) =>{
    return `Hello ${greeting} ${name}`
}


console.log(fun2("Pulkit"))
greeting = "Good Evening"
console.log(fun2("Pulkit"))
console.log(fun2("Pulkit"))