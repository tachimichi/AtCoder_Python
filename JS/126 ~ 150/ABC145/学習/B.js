// TODO
//*   ABC 145 B - Echo

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let n = parseInt(input[0], 10);
    let str = input[1];
    if(str.length % 2 == 1) return console.log('No');
    //* ------------------------------------------------------
    let harf = input[1].slice(0, n/2);
    if(str == harf + harf) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));