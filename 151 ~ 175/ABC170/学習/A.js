// TODO
//*   ABC 170 A - Five Variables

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split(' ').map(n => parseInt(n, 10));
    //* -------------
    for(let i = 1; i <= input.length; i++) {
        if(input[i-1] == 0) {
            console.log(i);
        }
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));