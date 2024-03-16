//A closure is a function along with its lexical scope, which allows it to access variables from its outer (enclosing) scope even after that scope has finished executing. A closure allows a function to remember and access variables from the environment in which it was created, even if the function is executed in a different scope.

// In simple, words, closure is a function with its surroundings means inner scope and outerscope. When closure is made, references are passed with it.

function outer(){
    let outerVal = 10;
    function inner(){
    let innerVal = 11;
    console.log(outerVal);
    }
    outerVal = 23;
    return inner; //Returns inner as closure which will have outer scope of outer function and inner scope also
    }
    
    let closure = outer(); 
    closure();