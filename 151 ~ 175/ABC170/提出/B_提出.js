// TODO
//*   ABC 170 B - Crane and Turtle

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [x, y] = input.trim().split(' ').map(n => parseInt(n, 10));
    //* -----------------------------
    let a = 0;
    let b = 0;

    for(let i = 0; i <= x; i++) {
        for(let j = 0; j <= x-i; j++) {
            if(i*2 + j*4 === y && i + j === x) return console.log('Yes');
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