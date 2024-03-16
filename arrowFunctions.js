// Arrow Functions are used as they provide concise code and they provide lexical (this) binding. which means they inherit this of their parent.

let obj1 = {
    name : "Pulkit",
    fun : function(){
    console.log(this.name);
     setTimeout(function (){console.log(this.name)},2000) //with normal function, this will give window object.
    }
    }



let obj1 = {
    name : "Pulkit",
    fun : function(){
    console.log(this.name);
     setTimeout(()=>{console.log(this.name)},2000) //with arrow function, this is giving correct value 
    }
    }
obj1.fun()