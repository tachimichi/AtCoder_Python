// TODO
//*   ABC 163 A - Circle Pond
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const r = parseInt(input.trim(), 10);
    // ----------------------------
    const ans = 2 * r * Math.PI;
    console.log(ans);
}



//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));