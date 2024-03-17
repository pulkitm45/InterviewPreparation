//Javascript is both sync and async, sync is default which means operations will be performed one after other but it could be blocking so promises, callbacks and async await is used to make js async and make it non blocking

//Event loop is used to handle asynchronous operations. Event loop will push the tasks from macro/micro queue to call stack when it is empty

console.log(1) //will go to callstack
setTimeout(()=>{console.log(2)},0) //Will go to micro tasks queue
let p = new Promise((resolve,reject)=>{ //will go to macro task queue
    setTimeout(()=>{
    resolve(4)
    console.log(3)},2000)
})
p.then((val)=>{console.log(val)})
console.log(5)

//output will be 1,5,2,3,4
