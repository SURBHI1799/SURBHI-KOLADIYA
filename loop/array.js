// function buttn() {

//     let myArray = ["abc", "bcd","cde", "def", "efg", "fgi"];


//     for (const a of myArray) {

//         forarray(a);
//     }
// }

//     function forarray(a) {

//         let label = document.createElement('label');

//         label.innerText = a;

//         document.body.appendChild(label);

//     }

function createlable(x){

    let lable = document.createElement('lable');

    lable.innerText = x + '\n';

    document.body.appendChild(lable);
}

let myArray = [];

// function submit(){

//     let a = document.getElementById('myid').value;

//     myArray.push(a);

//     createlable(a);
// }

    function submit(){

        let a = document.getElementById('myid').value;
        
         let x=0;
    
        myArray.push(a);

        while(x<myArray.length) {
            createlable(myArray[x]);
            x++;
      
        }

    // for(let x of myArray){

    //     createlable(x);

    // }

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


