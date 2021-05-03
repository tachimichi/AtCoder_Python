// TODO
//*   ABC 159 C - Maximum Volume
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const l = parseInt(input, 10);
    // -----------------------------
    console.log((l/3)*(l/3)*(l/3));
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));