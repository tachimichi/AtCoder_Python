// TODO
//*   ABC 196 C - Doubled

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    //* ----------------------
    let ans = 0;
    let x = 1;
    while( f(x) <= n) {
        ans++;
        x++;
    }
    console.log(ans);
}
function f(x) {
    let s = String(x);
    return s + s;
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
