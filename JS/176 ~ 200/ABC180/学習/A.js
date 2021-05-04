// TODO
//*   ABC 180 A - box

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    console.log(n - a +b);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));