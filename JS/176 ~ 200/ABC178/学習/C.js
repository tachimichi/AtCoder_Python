// TODO
//*   ABC 178 C - Ubiquity

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const int = parseInt(input, 10);
    console.log(int);
    const n = BigInt(input.trim());
    console.log(n);
    //* ----------------------------
    let a = 10;
    let b = 9;
    let c = 8;
    let mod = 1e9+7;
    //* -----------------------------
    for (let i = 1; i < n; i++) {
        a = (10 * a) % mod;
        b = (9 * b) % mod;
        c = (8 * c) % mod;
        console.log(a, b, b, c);
    }
    let ans = (a - 2 * b + c) % mod;
    console.log(a - 2 * b + c);
    console.log(ans);
    //* 
    console.log((ans + mod) % mod);
    
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));