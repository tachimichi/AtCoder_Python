// TODO
//*   ABC 144 A - 9x9

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split(' ');
    const a = parseInt(input[0], 10);
    const b = parseInt(input[1], 10);
    //* -------------------------------

    let ans = -1;
    if(a < 10 && b < 10) {
        ans = a*b;
    } 
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));