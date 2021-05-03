// TODO
//*   ABC 193 A	Star

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const X = parseInt(input, 10);
    
    const result = 100 - X % 100;

    console.log(result);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));