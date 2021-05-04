// TODO
//*   ABC 199 A - Square Inequality

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c] = input.trim().split(' ').map(n => parseInt(n, 10));
    if(a*a + b*b < c*c) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));