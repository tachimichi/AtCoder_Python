// TODO
//*   004 - Cross Sum

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    //* 入力(10^18 のためBigInt)
    const [a, b, c] = input.trim().split(' ').map(n => BigInt(n, 10));

    //* 3つ以上のgcdを回す
    let s = gcd(a, gcd(b, c));
    let ans = (a/s-1n) + (b/s-1n) + (c/s-1n); //* BigIntのため、数字+n
    console.log(ans.toString());//* BigInt形式で出力する
}


//* 2つの数字a, bの最大公約数を求める
function gcd(a, b) {
    if (b === 0n) return a;
    console.log(a, b);
    console.log('---------------');
    return gcd(b, a % b)
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/022.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}