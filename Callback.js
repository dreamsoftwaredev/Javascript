function teacher() {
    console.log("Our Sir is great");
}

function student(data) {
    console.log("Our Students are great " + data);
}

function principal(methodName) {
    //student("Our Principal is great");
    methodName(console.log("Our Principal is great"));
}

principal(student);