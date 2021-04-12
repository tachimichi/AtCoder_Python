// TODO
//*   ABC 191 A - Vanishing Pitch

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const args = input.split(' ');
    const V = parseInt(args[0], 10); // 10
    const T = parseInt(args[1], 10); // 3
    const S = parseInt(args[2], 10); // 5
    const D = parseInt(args[3], 10); // 20

    if(V * T <= D && D <= V * S) {
        console.log(`No`);
    } else {
        console.log(`Yes`);
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