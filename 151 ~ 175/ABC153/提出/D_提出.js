// TODO
//*   ABC 154 A - Remaining Balls

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [s, t] = input[0].split(' ');
    const [a, b] = input[1].split(' ').map(n => parseInt(n, 10));
    const u = input[2];
    //* -------------------------------------
    if(s == u) {
        console.log(a-1, b);
    } else {
        console.log(a, b-1);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/D.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}
