// TODO
//*   ABC 185 C - Duodecim Ferra

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    input = parseInt(input, 10);
    let L = BigInt(input, 10);
    //* -----------------------------
    let a = 1n;
    let b = 1n; 
    // 二項係数の計算
    //* (L-1)C11
    for (let i = 1n; i <= 11n; i++) {
        a *= (L - i);
        b *= i;
    }
    console.log((a / b).toString());
    
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/C.txt', 'utf8'));