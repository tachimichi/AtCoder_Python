// TODO
//*   ABC 182 B - Almost GCD

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    //* ---------------------------------
    let x = 0;
    let y = 0;
    let ans = 0;
    for(let j = 2; j <= Math.max(...a); j++) {
        let count = 0;
        for(let i = 0; i < n; i++) {
            if(a[i] % j === 0) count++;
            y = Math.max(x, count);
            if(y > x) {
                x = y;
                ans = j;
            }
        }
    }
    console.log(ans);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));