// TODO
//*   ABC 172 A - Calc

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const a = parseInt(input, 10);
    console.log(a + a**2 + a**3);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));