//async functions return a Promise. so .then can be used with them
//if await is used then flow of execution will be paused and promise would be waited to be fulfilled.


//inside async functions again cmds will be one after other

console.log(1) //first output

async function func(){
console.log("Hello") //Third Output
let delhiWeather = new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve("30 Degrees")
},3000)
})

let blrWeather = new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve("20 Degrees")
},6000)
})

console.log("Fetching Delhi Weather") //Fourth
let delhiW = await delhiWeather
console.log("Fetched Delhi Weather: " + delhiW) //Will wait for 3 secs
console.log("Fetching Bangalore Weather")
let blrW = await blrWeather
console.log("Fetched Bangalore Weather: " + blrW) //will wait for 3 secs more
return [delhiW,blrW]
}

console.log("Welcome") //Second Output
func()
console.log("Hi again") //This will not wait and will run parallel, if we want this also to wait then we will have to await the func