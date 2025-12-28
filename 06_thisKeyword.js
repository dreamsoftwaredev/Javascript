let person = {
    firstName: "jagdish",
    lastName: "Rao",
    sayHello() {
        console.log("Hello World My name is " + this.firstName + " " + this.lastName + " & I have a car of " + car.brand + " & " + " Model is " + car.model);
    }
}

let car = {
    brand: "Suzuki",
    model: "Swift",
}

person.sayHello();