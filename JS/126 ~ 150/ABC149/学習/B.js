// TODO
//*   ABC 149 B - Greedy Takahashi

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [a, b, k] = input.trim().split(' ').map(n => parseInt(n, 10));

    if(a+b <= k) {
        console.log(0, 0);
    } else if(a >= k) {
        console.log(a-k, b);
    } else {
        console.log(0, a+b-k);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));