// TODO
//*   ABC 198 B - Palindrome with leading zeros

function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    const b = input[2].split(' ').map(n => parseInt(n, 10));

    let min = 0;
    let max = 1000;
    for(let i = 0; i < n; i++) {
        min = Math.min(min, a[i]);
        max = Math.max(max, b[i]);
    }
    let t = max - min;
    if(t >= 0) {
        console.log(t+1);
    } else {
        console.log(0);
    }
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