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
function addNumbers() {
    console.log(addNumbers(arguments))
}

addNumbers(5, 4, 6, 8);