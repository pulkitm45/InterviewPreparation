// Arrow Functions are used as they provide concise code and they provide lexical (this) binding. which means they inherit this of their parent.

let obj1 = {
    name : "Pulkit",
    fun : function(){
    console.log(this.name);
     setTimeout(()=>{console.log(this.name)},2000)
    }
    }
    /* obj1.fun() */
    
    let obj2 = {
    name : "Pulkit",
    fun : ()=>{
    console.log(this.name);
    }
    }
    obj1.fun()