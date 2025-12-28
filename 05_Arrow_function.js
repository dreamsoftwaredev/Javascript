//syntax
//regular function 
function sayHello() {
    console.log("Hello Stuff");
}

sayHello();

//arrow function
const sayHelloA = () => {
    console.log("Hello Stuff from Arrow Function");
}

sayHelloA();

//One Line Arrow Function
const sayHelloB = () => console.log("hello Stuff from One Line Arrow Function"); sayHelloB();

// Arguments Keyword 
// Regular Function
function addNumbers() {
    console.log(arguments)
}

addNumbers(5, 4, 6, 8);

// Arrow function
const addNumbersA = (...args) => {
    console.log(args)
}

addNumbersA(5, 4, 6, 8); // will throw an error

// Hoisting 
// Regular Function
sayHelloC();
function sayHelloC() {
    console.log("Hello Bro")
}

// Arrow Function
//sayHelloD(); // will throw an error
const sayHelloD = () => {
    console.log("hello Brother")
}
sayHelloD();

// This Keyword
// Regular Function
const obj = {
    value: 20,
    myFunction: function () {
        console.log("Value is: " + this.value)
    }
}

obj.myFunction();

// Arrow Function
const objA = {
    value: 30,
    muFunctionA: () => {
        // console.log("the Value is " + this.value) //this.value is undefined here
        // Here this always referes to window object in arrow function
        console.log("the value is " + objA.value) // workaround to access value
    }
}

objA.muFunctionA(); // will return undefined because arrow function does not bind its own this