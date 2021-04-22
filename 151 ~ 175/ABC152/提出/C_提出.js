// TODO
//*   ABC 152 C - Low Elements
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let p = input[1].split(' ').map(n => parseInt(n, 10));
    //* ----------------------------
    let num = p[0];
    let ans = 1;

    for(let i = 0; i < n; i++) {
        if(num >= p[i]) {
            ans += 1;
        }
        num = p[i];
    }
    console.log(ans);
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