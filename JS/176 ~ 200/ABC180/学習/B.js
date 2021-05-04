// TODO
//*   ABC 180 B - Various distances

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let arr = input[1].split(' ').map(n => parseInt(n, 10));
    //* ---------------------------------------
    const ans1 = Manhattan(arr);
    const ans2 = Euclid(arr);
    const ans3 = Chebyshev(arr);
    
    console.log(ans1);
    console.log(ans2);
    console.log(ans3);
}

function Manhattan(arrayData) {
    let sum = 0;
    for(let i = 0; i < arrayData.length; i++) {
        sum += Math.abs(arrayData[i]);
    }
    return sum;
}
function Euclid(arrayData) {
    let sum = 0;
    for(let i = 0; i < arrayData.length; i++) {
        sum += Math.pow(arrayData[i], 2);
    }
    sum = Math.pow(sum, 1 /2);
    return sum;
}

function Chebyshev(arrayData) {
    let abs = [];
    for(let i = 0; i < arrayData.length; i++) {
        abs.push(Math.abs(arrayData[i]));
    }
    return Math.max(...abs);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));