// TODO
//*   ABC 145 C - Average Length

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let a = [];
    for (let i = 1; i <= n; i++) {
        let t = input[i].split(' ').map(n => parseInt(n, 10));
        a.push(t);
    }
    // console.log(a);
    let sum = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j  < n; j++) {
            //* √(x1-x2)^2 + (y1-y2)^2
            sum += Math.sqrt((a[i][0]-a[j][0])**2 + (a[i][1]-a[j][1])**2);
            count++;
        }
    }
    console.log(sum * (n-1) / count);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
