function lable(popArray) {

    let lable = document.createElement('lable');

    lable.innerText = popArray + '\n';

    document.body.appendChild(lable)

}

function pushArray() {
    let pusharray = ['v1', 'v2', 'v3'];

    pusharray.push('v4', 'v5', 'v6');

    lable(pusharray);

}

function poparray() {
    let popArray = ['jan', 'feb', 'march', 'april', 'may', 'june'];

    popArray.pop(); //june

    popArray.pop(); //may

    for (const x of popArray) {
        lable(x);
    }
}

function srtarray() {
    let sortArray = ['jan', 'feb', 'march', 'april', 'may', 'june'];

    sortArray.sort();
    for (const x of sortArray) {

        lable(x);

    }
}
function reversearray() {
    let reverseArray = ['jan', 'feb', 'march', 'april', 'may', 'june'];

    reverseArray.reverse();
    for (const x of reverseArray) {

        lable(x);

    }

}

function decarray() {
    let decArray = ["jan",45, "feb", "02" , "march", 60 , "april","05" , "may", "june"];

    decArray.sort().reverse();
    for (const x of decArray) {

        lable(x);

    }

}

function splicearray() {
    let spliceArray = ['jan', 'feb', 'march', 'april', 'may', 'june'];

    spliceArray.splice(1,3);
    for (const x of spliceArray) {

        lable(x);

    }

}

function mergearray() {
    let spliceArray = ['jan', 'feb', 'march', 'april', 'may', 'june'];

    let decArray = ["jan",45, "feb", "02" , "march", 60 , "april","05" , "may", "june"];


    let mergearray = spliceArray.concat(decArray);
    for (const x of mergearray) {

        lable(x);

    }

}
function slicearray(){

    let sliceArray = ['jan', 'feb', 'march', 'april', 'may', 'june'];

    const fruitsNewSlice = sliceArray.slice(1, 2);


    for (let z of fruitsNewSlice) {
        lable(z);
    }
}

function drive(){
  let age =  Number(document.getElementById('drive').value);

    

    if(age>=18){

// document.getElementById('lbl1').innerText= 'yes you can drive';
lable('yes you can drive');
    }

    else if(age<=17){
        // document.getElementById('lbl2').innerText= 'you can not drive';
        lable('you can not drive');
    }


    }

    

   function common(){

    const a =  Number(document.getElementById('abc').value);
    const b =  Number(document.getElementById('bcd').value);

    const x = Add(a,b);
    const y = Mul(a,b);
    //Mul(a,b);
   // console.log(a,b);
   document.getElementById('myid').innerText= x;
   document.getElementById('myid2').innerText= y;

   }
   function Add(a,b){

    return a+b;
    
   }
   function Mul(a,b){

    return a*b;
    
   }




