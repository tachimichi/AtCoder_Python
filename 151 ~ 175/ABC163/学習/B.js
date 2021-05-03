// TODO
//*   ABC 163 B - Homework

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].split(' ').map(n => parseInt(n, 10));
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    // ----------------------------------
    let sum = 0;
    for(let i = 0; i < m; i++) {
        sum += a[i];
        // 宿題が夏休み期間のキャパオーバーしたとき
        if(sum > n) return console.log(-1);
    }

    if(sum == n) {
        console.log(0);
    } else {
        console.log(n-sum);
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));