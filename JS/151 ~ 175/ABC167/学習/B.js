// TODO
//*   ABC 167 B - Easy Linear Programming

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [a, b, c, k] = input.trim().split(' ').map(n => parseInt(n, 10));
    //* -------------------------------
    let ans = 0;
    
    // aについての処理
    ans += Math.min(a, k);
    k -= ans;
    if(k === 0) return console.log(ans);
    // bについての処理
    k -= Math.min(b, k);
    if(k === 0) return console.log(ans);
    // cについての処理
    ans -= Math.min(c, k);
    //* 結果表示
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));