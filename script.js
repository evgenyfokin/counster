'use strict';

// My attempt
// function increaseTheNumber() {
//     document.getElementById('count').innerHTML++;
// }

// function decreaseTheNumber() {
//     document.getElementById('count').innerHTML--;
// }

let count = 0;

function changeNumber(num) {
    count += num;
    document.getElementById('count').innerHTML = count;
}
