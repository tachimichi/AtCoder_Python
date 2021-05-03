// TODO
//*   ABC 148 A - Round One

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const a = parseInt(input[0], 10);
    const b = parseInt(input[1], 10);
    //* 
    if(a+b == 3) {
        console.log(3);
    } else if(a+b == 4) {
        console.log(2);
    } else {
        console.log(1);
    }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));