// TODO
//*   ABC 196 C - Doubled

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    //* ----------------------
    let ans = 0;
    let x = 1;

    //* string型の数字でも、比較OKらしい
    while( f(x) <= n) {
        ans++;
        x++;
    }
    console.log(ans);
}
//* 10^12だと、TLEエラーになる
//* abc...|abc...の片方をチェックする
function f(x) {
    let s = String(x);
    return s + s;
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}