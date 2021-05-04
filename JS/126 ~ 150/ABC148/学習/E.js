// TODO
//*   ABC 148 E - Double Factorial

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let n = BigInt(input, 10);

    //* nが奇数の場合、奇数の積=2で割ることができない
    if(n % 2n != 0) return console.log(0);

    //* 2*5(=10)の素因数分解
    //* min(2で割り切れる数, 5で割り切れる数)となる、5で割り切れる数が小さいのは明確
    //* 
    //? 例：n=10
    //? 10*8*6*4*2 = 2^5(5*4*3*2*1) =32*(120)
    //? 32に10が無いため、末尾0の確認する必要無し
    //? 120 = 5! = (n/2)!の末尾に10が何個あるか、という問題
    //? 
    //? 
    //? 
    // console.log(n);
    let harf= n / 2n;
    let sum = 0n;
    
    //* (n/2) > 0の場合、ループ処理
    while(harf) { 
        sum += harf / 5n;
        harf /= 5n;
    }
    console.log(sum.toString());

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/E.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}