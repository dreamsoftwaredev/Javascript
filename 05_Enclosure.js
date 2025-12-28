function adder(num) {
    function add(b) {
        console.log(num + b);
    }

    return add;
}

const addTo5 = adder(5);

addTo5(5); //10;