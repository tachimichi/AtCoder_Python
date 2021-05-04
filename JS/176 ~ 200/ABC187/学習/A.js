// TODO
//*   ABC 187 A - Large Digits

function main(input) {
    'use strict';
    let [a, b] = input.split(' ');
    a = a.split('').map(n => parseInt(n, 10));
    b = b.split('').map(n => parseInt(n, 10));
    //* -------------------------------------
    // console.log(a);
    // console.log(b);
    let x = 0;
    let y = 0;

    for(let i = 0; i < 3; i++) {
        x += a[i];
        y += b[i];
    }
    const ans = Math.max(x, y);

    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));