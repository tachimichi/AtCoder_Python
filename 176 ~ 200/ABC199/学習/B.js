// TODO
//*   ABC 198 B - Palindrome with leading zeros

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    const b = input[2].split(' ').map(n => parseInt(n, 10));

    let max = Math.max(...a);
    let min = Math.min(...b);
    let t = min -max;
    if(t > 0) {
        console.log(t+1);
    } else {
        console.log(0);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));