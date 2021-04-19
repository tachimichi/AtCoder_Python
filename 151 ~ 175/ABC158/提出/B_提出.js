// TODO
//*   ABC 158 B - Count Balls

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, a, b] = input.trim().split(' ').map(n => BigInt(n));
    //* ------------------------
    let ans = 0;
    const amari = n % (a+b);
    const t = (n-amari) / (a+b);
    if(amari > a) {
        ans = a*t + a;
    } else {
        ans = a*t + amari;
    }
    console.log(ans.toString());
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