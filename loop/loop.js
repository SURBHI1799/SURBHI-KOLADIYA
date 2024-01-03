function forloop() {
    for (let x = 1; x <= 10; x++) {
        let mul = 10 * x;
        let calculation = "10 * " + x + " = " + mul;
        // label(calculation);
        console.log(calculation);
    }

    // function label(calculation) {
    //     let label = document.createElement('label');

    //     label.innerText = calculation + '\n';

    //     document.body.appendChild(label);
    // }
}
let arrays = ["surbhi", "shrikar", "komal", "bhavyesh", "vivek"]
for (const a in arrays) {

    console.log(a)
}

for (const a of arrays) {

    console.log(a)
}
let history = {
    name: 'surbhi',
    age: 25
}

for (const b in history) {
    console.log(b)
}
