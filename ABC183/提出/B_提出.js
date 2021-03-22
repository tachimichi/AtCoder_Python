// TODO
//*   ABC 184 B - Quizzes

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split('\n');
    let [n, x] = input[0].split(' ').map(n => parseInt(n, 10));
    let s = input[1].split('');
    //* ---------------------------------------------------------
    for(let i = 0; i < n; i++) {
        if(s[i] === 'o') {
            x++;
        } else {
            if(x > 0) x--;
        }
    }
    console.log(x);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/B.txt', 'utf8'));