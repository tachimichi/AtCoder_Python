// TODO
//*   ABC 164 A - Sheep and Wolves

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [s, w] = input.trim().split(' ').map(n => parseInt(n, 10));
    // ----------------------------
    if(w >= s) {
        console.log('unsafe');
    } else {
        console.log('safe');
    }
}



//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}