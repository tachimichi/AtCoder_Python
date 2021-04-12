// TODO
//*   ABC 169 B - Multiplication 2

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const x = input[1].split(' ').map(n => BigInt(n, 10));
    //* -----------------
    if(x.includes(0n)) return console.log(0);
    //* -----------------------
    let sum = x[0];
    for(let i = 1; i < n; i++) {
        sum *= x[i];
        if(sum > 1e18) return console.log(-1);
    }
    //* -----------------------------
    console.log(sum.toString());

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}