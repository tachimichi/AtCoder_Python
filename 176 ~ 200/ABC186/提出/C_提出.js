// TODO
//*   ABC 186 C - Unlucky 7

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let n = parseInt(input, 10);
    //* ---------------
    let count = 0;

    for(let i = 1; i <= n; i++) {
        if(i.toString(10).includes('7') || i.toString(8).includes('7')) count++;
    }

    console.log(n -count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/C.txt', 'utf8'));