// TODO
//*   ABC 162 C - Sum of gcd of Tuples (Easy) 
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    //* --------------------
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            for(let k = 1; k <= n; k++) {
                sum += gcd(gcd(i, j), k);
            }
        }
    }
    console.log(sum);
    console.log(10 % 25);
}
//* 2つの数字a, bの最大公約数を求める
function gcd(a, b) {
    if (b === 0) return a;
    console.log(a, b);
    console.log('---------------');
    return gcd(b, a % b)
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));