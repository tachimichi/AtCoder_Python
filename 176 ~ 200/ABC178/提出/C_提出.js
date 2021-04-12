// TODO
//*   ABC 178 C - Ubiquity

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = BigInt(input.trim());
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
        // console.log(a, b, b, c);
    }
    let ans = (a - 2 * b + c) % mod;
    //* 
    console.log((ans + mod) % mod);
    
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}
