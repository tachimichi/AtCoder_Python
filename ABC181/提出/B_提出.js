// TODO
//*   ABC 182 B - Trapezoid Sum

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let n = parseInt(input[0], 10);
    //* ---------------------------------
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        let ab = input[i].split(' ').map(n => parseInt(n, 10));
        const a = ab[0];
        const b = ab[1];
        sum += (a+b)*(b-a+1)/2;
    }
    console.log(sum);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/B.txt', 'utf8'));