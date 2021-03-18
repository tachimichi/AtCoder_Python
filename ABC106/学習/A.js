// TODO
//*   ABC 106 A - Garden

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split(' ');
    const a = parseInt(input[0], 10);
    const b = parseInt(input[1], 10);
    //* -------------------------------
    console.log((a-1) * (b-1));


}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));