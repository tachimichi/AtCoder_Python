// TODO
//*   ABC 181 A - Heavy Rotation

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = parseInt(input, 10);

    if(input % 2 === 1) {
        console.log('Black');
    } else {
        console.log('White');
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));