//Map, Filter, Reduce are javascript's built in High order functions. These are functions which take one or more functions as arguments and return function as a result.

let arr = [1,2,3,4,5]

//Map -- applies a function to every element of the array and returns are new array.

let arr2 = arr.map(item => item**2)
console.log(arr2)

//Filter -- creates new array with elements that pass a condition

let arr3 = arr.filter(item => item>2)
console.log(arr3)

//Reduce -- applies a function against accumulator and each element in array to reduce it to single value
let arr4 = arr.filter((accumulator,number) => accumulator+number)
console.log(arr4)

