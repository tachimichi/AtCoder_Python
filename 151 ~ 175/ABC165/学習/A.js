// TODO
//*   ABC 165 A - We Love Golf

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const k = parseInt(input[0], 10);
    const [a, b] = input[1].split(' ').map(n => parseInt(n, 10));
    // --------------------------------------
    for(let i = a; i <= b; i++) {
        if(i % k === 0) return console.log('OK');
    }
    console.log('NG');
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));