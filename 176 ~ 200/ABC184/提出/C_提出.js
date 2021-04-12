// TODO
//*   ABC 186 A - Brick

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split(' ');
    const n = parseInt(input[0], 10);
    const w = parseInt(input[1], 10);
    //* ------------------------------
    console.log(Math.floor(n / w));
    


}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}