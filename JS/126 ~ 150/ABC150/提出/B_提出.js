// TODO
//*   ABC 150 B - Count ABC

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    const S = input[1].split('');
    const [a, b, c] = ["A", "B", "C"];
    //* ------------------------------------------------------

    let count = 0;

    for(let i = 0; i < S.length; i++) {
        if(a === S[i] && b === S[i+1] && c === S[i+2]) {
            count++;
        }
    }
    console.log(count);
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