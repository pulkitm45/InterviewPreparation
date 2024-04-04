//Shallow Copy -- Pass by Reference
//Deep Copy -- Pass by Value

//For primitive by default it does deep copy

//Shallow Copy

//Assignment Operator -- if we change copied object value then it will affect original also
// const obj1 = {
//     name: "Pulkit",
//     role: "Dev"
// }

// const obj2 = obj1;
// console.log(obj1.name)
// console.log(obj2.name)

// obj2.name = "Girish"
// console.log(obj1.name)
// console.log(obj2.name)



//Deep Copy
//JSON.parse(JSON.stringify()) method -- creates deep copy but disadvantage is if object has functions then it doesn't copy functions. It will copy even nested objects and if we change nested key that also wont affect the original array.
// const obj1 = {
//     name:"Pulkit",
//     role:"Dev"
//     }
    
//     const obj2 = JSON.parse(JSON.stringify(obj1));
//     console.log(obj1.name)
//     console.log(obj2.name)
    
//     obj2.name = "Girish"
//     console.log(obj1.name)
//     console.log(obj2.name)

//Object.assign() -- it does a partial deep copy which means if there is a nested object and data in the nested object is being changed then that change will affect in the original object also.

// const obj1 = {
//     name:"Pulkit",
//     role:"Dev",
//     address:{
//     city:"Amritsar",
//     country:"India"
//     }
//     }
    
//     const obj2 = Object.assign({},obj1)
//     console.log(obj1)
//     console.log(obj2)
    
//     obj2.name = "Girish"
//     obj2.address.city = "Goa" 
//     console.log(obj1)
//     console.log(obj2)  //Both will print Goa as city

//Spread also does a partial deep copy same as object.assign but deep copy can be achieved with below function
// const obj1 = {
//     name:"Pulkit",
//     role:"Dev",
//     address:{
//     city:"Amritsar",
//     country:"India"
//     }
//     }
    
//     let obj2 = {...obj1}
//     console.log(obj1)
//     console.log(obj2)
//     obj2 = {                         //With this we can achieve full deep copy.
//     ...obj2,name:"Girish",
//     address:{
//     ...obj2.address,city:"Goa"
//     }
//     }
//     console.log(obj1)
//     console.log(obj2) 
    



