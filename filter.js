var ages = [32, 33, 15, 18, 16, 40];
var result = ages.filter(checkOlder);

function checkOlder(age) {
    return age >= 30;
}

console.log(result); // [32, 33, 40]