// TODO
//*   ABC 178 B - Product Max

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c, d] = input.trim().split(' ').map(n => BigInt(n, 10));
    //* -----------------
    let max = a * c;
    if(a * d > max) max = a * d;
    if(b * c > max) max = b * c;
    if(b * d > max) max = b * d;
    //* -----------------
    console.log(max.toString());
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