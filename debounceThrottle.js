//Debounce and Throttle are achieved by setInterval Web API.
//Debounce is used when we want to run a function after a specific time.
//Both are used to enhance the performance of app.
//Example Searching in flipkart. When we type it takes some millisecs to show us the results.

let count=1;
function getData(){
    console.log("Fetching Data" + count++)
}

function myDebounce(call,d){
    let timer
    return function(...args){
        if(timer) clearInterval(timer)
        setTimeout(() => {
            call()
        }, d);
    }
}

const betterFunction = myDebounce(getData,1000);

//Throttling is used to run a function after a defined time like 5 secs.
//Example can be pushing some data to a database. So we can disable the button for 5 secs.
