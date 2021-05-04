// TODO
//*   ABC 153 C - Fennec vs Monster
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k] = input[0].split(' ').map(n => parseInt(n, 10));
    let h = input[1].split(' ').map(n => parseInt(n, 10)).sort((a, b) => b - a); // 降順
    //* ----------------------------
    let sum = 0;
    for(let i = 0; i < h.length; i++) {
        if(i < k) h[i] = 0;
        sum += h[i];
    }
    console.log(sum);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));