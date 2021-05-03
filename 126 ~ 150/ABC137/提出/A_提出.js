// TODO
//*   ABC 137 A

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b]= input.trim().split(' ').map(n => parseInt(n, 10));
    const s = a+b;
    const t = a-b;
    const u = a*b;
    const max = Math.max(s, t, u);

    console.log(max);
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