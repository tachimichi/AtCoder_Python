// TODO
//*   ABC 188 B - Orthogonality

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split("\n");
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    const b = input[2].split(' ').map(n => parseInt(n, 10));
    
    console.log(a);
    console.log(b);


    //* ------------------------------------------------------
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += a[i] * b[i];
    }

    if(sum === 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));