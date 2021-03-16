// TODO
//*   ABC 195 B - Many Oranges

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [A, B, W] = input.split(' ').map(Number);
    console.log([A, B, W]);
    //* ------------------------------
    let m = 1e9;
    let M = 0;
    W *= 1000;

    //* n=グラム(1gずつ増やす。1,000,000gが上限)
    for(let n = 1; n < W+1; n++) {
        //* 最小みかん*個数 < 規定のグラム < 最大みかん*個数
        //* その間なら1g単位で修正してWgに修正することが可能
        if(A*n <= W && W <= B*n) {
            console.log('-----------------------');
            console.log(`n: ${n}`);
            console.log(`m: ${m}`);
            console.log(`M: ${M}`);
            console.log('-----------------------');
            m = Math.min(m, n);
            M = Math.max(M, n);
        } 
    }

    if(M !== 0) {
        console.log(m + ' ' + M);
    } else {
        console.log('UNSATISFIABLE');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));