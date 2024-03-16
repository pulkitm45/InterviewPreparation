//Every object in javascript has a prototype which acts as blueprint for methods and properties, when you try to access a property, javascript first checks the object itself, if not found it checks prototype until it finds it or it finds null.

function Person(name){
    this.name = name;
}

Person.prototype.greet = function (){console.log("Hello my name is " + this.name)}

const p1 = new Person("Pulkit")

p1.greet(); //Greet method gets associated with all instances of Person.


