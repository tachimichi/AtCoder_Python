// TODO
//*   ABC 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split(' ');
    const k = parseInt(input[0], 10);
    const x = parseInt(input[1], 10);
    //* --------------------------------------------
    if(500*k >= x) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/A.txt', 'utf8'));