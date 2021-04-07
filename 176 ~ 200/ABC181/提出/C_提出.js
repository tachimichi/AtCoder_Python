// TODO
//*   ABC 181 C - Collinearity

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let n = parseInt(input[0], 10);
    let x = [];
    let y = [];
    for (let i = 1; i <= n; i++) {
        let [a, b] = input[i].split(' ').map((n) => parseInt(n, 10));
        x.push(a);
        y.push(b);
    }
    //* -----------------------------------
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (i==j || j==k || i==k) continue;
                //* 直線 AB の方向ベクトルは (bx−ax,by−ay) ⇒(d1x,d1y) 
                let a = x[j] - x[i];
                let b = y[j] - y[i];
                //* 直線 AC の方向ベクトルは (cx−ax,cy−ay) ⇒(d2x,d2y) 
                let c = x[k] - x[i];
                let d = y[k] - y[i];
                //* 平行であるための必要十分条件
                //* d1x * d2y=d2x * d1y
                if (a*d == c*b) return console.log('Yes');
            }
        }
    }
    console.log('No');

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/C.txt', 'utf8'));