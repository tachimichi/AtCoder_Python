// TODO
//*   ABC 175 A - Rainy Season
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    //* --------------------------------
    const s = input.trim().split('');
    //----------------------------------
    const p = s[0] == 'R';
    const q = s[1] == 'R';
    const r = s[2] == 'R';

    if(p && q && r) {
        console.log(3);
    } else if((p && q) || (q && r)) {
        console.log(2);
    } else if(p || q || r) {
        console.log(1);
    } else {
        console.log(0);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));