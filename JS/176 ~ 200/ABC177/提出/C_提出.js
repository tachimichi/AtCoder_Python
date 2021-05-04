// TODO
//*   ABC 177 C - Sum of product of pairs

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let a = input[1].split(' ').map(n => BigInt(n, 10));
    //* ----------------------------------
    let mod = 1000000007n;
    let sum = 0n;
    let x = 0n;
    
    for(let i = 0n; i < n; i ++) {
        sum += a[i] * x;
        x += a[i];
    }

    let ans = sum % mod;
    console.log(ans.toString());
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