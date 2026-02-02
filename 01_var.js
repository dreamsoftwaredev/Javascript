console.log(x); // undefined but hoisting occurs

if (true) {
    var x = "Jagdish"
    var x = "Kumar" //redeclaration allowed with var
}

console.log(x);

// Var is function scoped, reinitialize and redclaration
// allowed. it is hoisted with undefined.