// TODO
//*   ABC 106 C - To Infinity

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split('\n');
    //* sを1文字ずつ分割して、配列化
    const s = input[0].split('').map(n => parseInt(n, 10));
    const k = parseInt(input[1], 10);
    //* -----------------------------
    for(let i = 0; i < k; i++) {
        //* 初めて1ではない数字が、そのまま答え
        //* 2~9^5000兆は、数え上げられない
        if(s[i] !== 1) {
            console.log(s[i]);
            return;
        }
    }
    console.log(1);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
