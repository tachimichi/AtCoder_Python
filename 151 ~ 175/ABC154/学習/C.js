// TODO
//*   ABC 154 C - Distinct or Not
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    //* ------------------------------------
    const t = new Set(a);
    // console.log(a.length);
    // console.log(t.size);
    if(a.length == t.size)
        console.log('YES');
    else
        console.log('NO');
    //* 別解法 -----------------------------
    //* ソートして、同じ数値を隣り合わせる
    a.sort();
    for(let i = 0; i < n; i++)
        if(a[i] == a[i+1]) return console.log('NO');
    console.log('YES');
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