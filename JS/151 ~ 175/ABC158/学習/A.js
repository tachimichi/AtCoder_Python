// TODO
//*   ABC 158 A - Station and Bus
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const str = input.trim();
    // ----------------------------
    // console.log(str[0]);
    if(str[0] == str[1] && str[1] == str[2]) {
        console.log('No');
    } else {
        console.log('Yes');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
