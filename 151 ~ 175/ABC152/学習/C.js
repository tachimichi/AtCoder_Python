// TODO
//*   ABC 152 C - Low Elements
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let p = input[1].split(' ').map(n => parseInt(n, 10));
    //* ----------------------------
    let count = 0;
    let num = p[0];
    for(let i = 0; i < n; i++) {
        //* 最小値を固定したい
        num = Math.min(num, p[i]);
        //* 最小値があれば、カウントする
        if(p[i] == num) count++;
    }
    console.log(count);
}





//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));