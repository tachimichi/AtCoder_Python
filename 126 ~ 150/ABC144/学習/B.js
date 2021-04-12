// TODO
//*   ABC 144 B - 81

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    //* ------------------------------------------------------

    for(let i = 1; i <= 9; i++) {
        for(let j = 1; j <= 9; j++) {
            var seki = i * j;
            if(seki === n) {
                console.log('Yes');
                return;
            }
        }
    }
    console.log('No');
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}