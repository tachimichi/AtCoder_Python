// TODO
//*   ABC 195 A - Health M Death

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [M, H] = input.split(' ').map(n => parseInt(n, 10));
    // console.log([M, H]);
    //* ------------------------------
    if(H % M === 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/A.txt', 'utf8'));