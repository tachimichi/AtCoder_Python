// TODO
//*   ABC 182 A - twiblr

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split(' ');
    const a = parseInt(input[0], 10);
    const b = parseInt(input[1], 10);
    //* ---------------------------------
    const max = 2 * a + 100;
    
    console.log(max - b);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/A.txt', 'utf8'));