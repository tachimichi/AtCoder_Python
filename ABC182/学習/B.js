// TODO
//*   ABC 183 B - Billiards

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [x, y, a, b] = input.split(' ').map(n => parseInt(n, 10));
    const sum = (a - x) / 3;

    let ans = ((x*b) + (a*y)) / (y + b);

    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));