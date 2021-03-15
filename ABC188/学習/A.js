// TODO
//*   ABC 188 A - Three-Point Shot

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.split(' ').map(n => parseInt(n, 10));
    // console.log([a, b]);
    //* ------------------------------
    let low = Math.min([a], [b]);
    let high = Math.max([a], [b]);

    if(low + 3 > high) {
        console.log('Yes');
    } else {
        console.log('No');
    }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));