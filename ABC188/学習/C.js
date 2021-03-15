// TODO
//*   ABC 188 C - ABC Tournament

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split("\n");
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    //* -------------------------------------------------------

    let x = 0;
    let y = 0;

    //* a.length / 2 ⇒前半パート
    for(let i = 0; i < a.length / 2; i++) {
        // 前半で最大値を求める
        x = Math.max(a[i], x);
    }
    //* a.length/2 ~ a.length ⇒後半パート
    for(let i = (a.length / 2); i < a.length; i++) {
        // 後半で最大値を求める
        y = Math.max(a[i], y);
    }

    const loser = Math.min(x, y);
    //* loserがi番目か調べる
    for(let i = 0; i < a.length; i++) {
        if(loser === a[i]) {
            return console.log(i +1);
        }
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
