// TODO
//*   ABC 180 C - Cream puf

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let n = parseInt(input[0], 10);
    
    let sum = 0;
    for (let a = 1; a <= n; a++) {
        //TODO a * b + c = nを求める
        //* a * b = n-c
        //* aを軸に固定をする(a => iとする)
        //* c = n - (aの倍数)
        // n-1以下の整数のうち、aの倍数は何個あるのか
        sum += Math.floor((n-1) / a);
    }
    
    console.log(sum);
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