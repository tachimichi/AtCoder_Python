// TODO
//*   ABC 155 A - Poor

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c] = input.trim().split(' ').map(n => parseInt(n, 10));
    //* -----------------
    if((a == b && b == c) || (a != b && b != c && a != c)) {
        console.log('No');
    } else {
        console.log('Yes');
    }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
