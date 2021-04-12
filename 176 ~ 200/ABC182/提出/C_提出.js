// TODO
//*   ABC 182 C - To 3

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let n = parseInt(input, 10);
    let f = input.split('').map(n => parseInt(n, 10));
    //* ----------------------------
    let single = 0;
    let double = 0;
    let d = 0;
    let sum = 0;
    let keta = 0;

    while(n) {
        d = n % 10;
        if(d % 3 === 1) single++;
        if(d % 3 === 2) double++;
        n = Math.floor(n / 10);
        sum += d;
        keta++;
    }

    // console.log(single, double);
    // console.log(sum);
    // console.log(keta);

    if(sum % 3 === 0) return console.log(0);
    if(n.length === 1) return console.log(-1);
    
    if (sum % 3=== 1) {
        if(single >= 1 && keta > 1) return console.log(1);
        if(double >= 2 && keta > 2) return console.log(2);
    }
    else if(sum % 3 === 2) {
        if(double >= 1 && keta > 1) return console.log(1);
        if(single >= 2 && keta > 2) return console.log(2);
    }
    console.log(-1);

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
