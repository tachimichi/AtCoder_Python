// TODO
//*   ABC 156 C - Rally
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const x = input[1].split(' ').map(n => parseInt(n, 10));
    //* ----------------------------
    let min = 100000000;
    let count = 0;
    for(let i = 0; i <= 100; i++) {
        let sum = 0;
        for(let j = 0; j < n; j++) {
            sum += (i - x[j])**2;
            count++;
        }
        min = Math.min(min, sum);
    }
    console.log(min);
    console.log(count);
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