// function forloop() {
//     for (let x = 1; x <= 10; x++) {
//         let mul = 10 * x;
//         let calculation = "10 * " + x + " = " + mul;
//         // label(calculation);
//         console.log(calculation);
//     }

//     // function label(calculation) {
//     //     let label = document.createElement('label');

//     //     label.innerText = calculation + '\n';

//     //     document.body.appendChild(label);
//     // }
// }
// let arrays = ["surbhi", "shrikar", "komal", "bhavyesh", "vivek"]
// for (const a in arrays) {

//     console.log(a);
// }

// for (const a of arrays) {

//     console.log(a)
// }
// let history = {
//     name: 'surbhi',
//     age: 25
// }

// for (const b in history) {
//     console.log(b)
// }

function createlable(x){

    let lable = document.createElement('lable');

    lable.innerText = x + '\n';

    document.body.append(lable);
}

let myArray = [];

function submit(){

    let a = document.getElementById('myid').value;

    myArray.push(a);


    for(let x of myArray){

        createlable(x);
    }

    
}

function remove(){

    let a = document.getElementById('myid').value;

    for(let x of myArray){

        createlable(x);
    }

    myArray.pop(a);

}

function reverse(){

    let a = document.getElementById('myid').value;

    myArray.reverse(a);


    for(let x of myArray){

        createlable(x);
    }

    
}