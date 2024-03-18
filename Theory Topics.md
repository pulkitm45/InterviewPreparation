this -- This Keyword --  the keyword is a special variable that is automatically defined in the scope of every function. Its value depends on how the function is invoked. The keyword is used to refer to the object that is the current context of the function or, more simply the object that the function is a method of.
if this is used outside the function or method, then it refers to the window object but if it is method of the object then it refers to the object.

prototype -- Every object in javascript has a prototype which acts as blueprint for methods and properties, when you try to access a property, javascript first checks the object itself, if not found it checks prototype until it finds it or it finds null.

arrow functions -- Arrow Functions are used as they provide concise code and they provide lexical (this) binding. which means they inherit this of their parent.

HOC -- Map, Filter, Reduce are javascript's built in High order functions. These are functions which take one or more functions as arguments and return function as a result.

Javascript is both sync and async, sync is default which means operations will be performed one after other but it could be blocking so promises, callbacks and async await is used to make js async and make it non blocking

Event loop is used to handle asynchronous operations. Event loop will push the tasks from macro/micro queue to call stack when it is empty

A closure is a function along with its lexical scope, which allows it to access variables from its outer (enclosing) scope even after that scope has finished executing. A closure allows a function to remember and access variables from the environment in which it was created, even if the function is executed in a different scope. In simple, words, closure is a function with its surroundings means inner scope and outerscope. When closure is made, references are passed with it.

The call, bind, apply are used in js to manipulate how a function is invoked and set the value of this within the function

async functions return a Promise. so .then can be used with them
if await is used then flow of execution will be paused and promise would be waited to be fulfilled.

Hoisting is process in which the declarations of variables and functions are moved to top of their respective scope. Actually during the compilation phase, the memory is allocated to the variables but their values are not initialised only when the lines are executed. Before the execution of specific lines, the value will be undefined in case of var, in case of let and const, they are also hoised but they fall under temporal dead zone so when they are accessed before their initialization, they give reference error. in temporal zone, the values are inaccessible. TDZ is space between, global scope and variable intialization.


Scope --  "scope" refers to the context in which variables and functions are declared and accessed. It defines the visibility and accessibility of these variables and functions within the code. 

Debouncing -- Limits the invokation of function until specified delay time. example -- text change
Throttling -- Limits the rate at which a function can be invoked. example -- resizing a window.