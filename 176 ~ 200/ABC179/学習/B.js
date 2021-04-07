// TODO
//*   ABC 179 B - Go to Jail

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split('\n');
    let n = parseInt(input[0], 10);
    let count = 0;
    let ans = 'No';
    //* ---------------------
    for(let i = 1; i <= n; i ++) {
        const [x, y] = input[i].split(' ').map(n => parseInt(n, 10));
        if(x === y) {
            count += 1;
        } else {
            count = 0;
        }
        if(count === 3) ans = 'Yes';
    }
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));