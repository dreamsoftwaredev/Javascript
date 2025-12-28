let person = {
    name: "Jagdish Rao",
    age: 26,
    //     let sayHello = (car, model) => {
    //     console.log(`Hello my name is ${this.name} & my age is ${this.age} and i have a ${car} with the model ${model}`)
    // } // Here we removed for continue calling for this function each object 
}

let person1 = {
    name: "Manjit Sahoo",
    age: 24,
}

let sayHello = function (car, model) {
    console.log(`Hello my name is ${this.name} & my age is ${this.age} and i have a ${car} with the model ${model}`)
}

// For call method in js
sayHello.call(person, "BMW", "XS");
// For apply method in js
sayHello.apply(person1, ["audi", "Q7"]);
//  For bind method in js
let sayHelloBind = sayHello.bind(person1, "Renault", "Koleos");
console.log(sayHelloBind());
sayHelloBind();