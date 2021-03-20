// TODO
//*   ABC 196 B - Round Down

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split('.');
    let x = parseInt(input[0], 10);
    let y = Number(input[0]);
    console.log(input[0]);
    console.log(x);
    console.log(y);

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));