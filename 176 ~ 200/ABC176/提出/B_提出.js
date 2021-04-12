// TODO
//*   ABC 176 B - Multiple of 9

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = input;
    //* --------------------------
    // console.log(n);
    // console.log(n.length);
    
    let sum = 0n;
    for(let i = 0; i < n.length; i++) {
        sum += BigInt(input[i], 10);
    }
    if(sum % 9n === 0n) {
        console.log('Yes');
    } else { 
        console.log('No');
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