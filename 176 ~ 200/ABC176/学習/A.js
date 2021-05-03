// TODO
//*   ABC 176 A - Takoyaki
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, x, t] = input.split(' ').map(n => parseInt(n, 10));
    //* --------------------------------
    let set = Math.ceil(n / x);
    const ans = set * t;

    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
