// TODO
//*   ABC 196 A	Difference Max

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split('\n');
    let [a, b] = input[0].split(' ').map(n => parseInt(n, 10));
    let [c, d] = input[1].split(' ').map(n => parseInt(n, 10));
    //* ---------------------------------------------------------
    let x = Math.max(a, b);
    let y = Math.min(c, d);
    //* ------------------------------
    console.log(x - y);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/A.txt', 'utf8'));