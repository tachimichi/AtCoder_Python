// TODO
//*   ABC 149 A - Strings 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [s, t] = input.trim().split(' ').map(n => n);
    console.log(t.concat(s));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));