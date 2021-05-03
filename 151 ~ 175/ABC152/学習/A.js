// TODO
//*   ABC 152 A - AC or WA

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, m] = input.trim().split(' ').map(n => parseInt(n, 10));
    if(n == m)
        console.log('Yes');
    else
        console.log('No');
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));