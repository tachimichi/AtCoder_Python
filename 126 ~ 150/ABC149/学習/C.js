// TODO
//*   ABC 149 C - Next Prime

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let x = parseInt(input, 10);
    for(let i = x; i <= 100003; i++) {
        if(primeNumber(i)) return console.log(i);
    }
}

function primeNumber(n) {
    if (n === 2) return true;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
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