// TODO
//*   ZONeエナジー A - UFO襲来

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = input.trim().split('ZONe');
    console.log(n.length - 1);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
