// TODO
//*   ABC 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const p = input[1].split(' ').map((n) => parseInt(n, 10));
    const q = input[2].split(' ').map((n) => parseInt(n, 10));
    //* ソート（昇順）
    let t = p.sort((a, b) => a - b);
    //* ----------------------------------------------------------
    console.log(p);
    console.log(q);
    console.log(t);
    console.log(t.length);

    //* ----------------------------------------------------------
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
