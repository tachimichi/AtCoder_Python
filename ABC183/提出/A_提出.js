// TODO
//*   ABC 183 A - ReLU

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = parseInt(input, 10);
    //* ------------------------------
    if(input < 0) input = 0;
    console.log(input);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/A.txt', 'utf8'));