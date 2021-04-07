// TODO
//*   ABC 106 B - 105

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [A, B, W] = input.split(' ').map(Number);
    // console.log([A, B, W]);
    //* ------------------------------
    let m = 1e9;
    let M = 0;
    W *= 1000;

    //* n=グラム、1gずつ増やす。Wgが上限)
    for(let n = 1; n <= W; n++) {
        //* 最小みかん*個数 < 規定のグラム < 最大みかん*個数
        if(A*n <= W && W <= B*n) {
            // console.log(`n: ${n}`);
            // console.log(`A*n: ${A * n}`);
            // console.log(`B*n: ${B * n}`);
            m = Math.min(m, n);
            M = Math.max(M, n);
        }
    }

    if(M !== 0) {
        console.log(m + ' ' + M);
    } else {
        console.log('UNSATISFIABLE');
    }
   // console.log('-----------------------');
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/B.txt', 'utf8'));