// TODO
//*   ABC 154 B - I miss you...

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const str = input.trim().split('').map(n => n = 'x').join('');
    console.log(str);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));