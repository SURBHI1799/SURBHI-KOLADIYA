function firstRollver() {

    document.getElementById('btnid').classList.add('s1', 's2');
}

function myResult() {
    let marks1 = document.getElementById('txtid1');
    let marks2 = document.getElementById('txtid2');

    totalMarks1 = document.getElementById('lblid1');
    totalMarks2 = document.getElementById('lblid2');

    if (marks1.value > 36) {
        totalMarks1.className = 'pass';
        totalMarks1.innerText = 'pass';

    }
    else if (marks1.value <= 36) {
        totalMarks1.className = 'fail';
        totalMarks1.innerText = 'fail';

    }

    if (marks2.value > 36) {
        totalMarks2.className = 'pass';
        totalMarks2.innerText = 'pass';

    }
    else if (marks2.value <= 36) {
        totalMarks2.className = 'fail';
        totalMarks2.innerText = 'fail';

    }
}


function focusEnter(){
     let firstbox =Number(document.getElementById('myid1').value='10');
   
let secondbox = Number(document.getElementById('myid2').value);
let x = firstbox
let y = secondbox
document.getElementById('mylblid').innerText = x+ y;
}