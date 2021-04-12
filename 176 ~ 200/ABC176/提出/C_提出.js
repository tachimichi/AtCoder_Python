// TODO
//*   ABC 176 C - Step

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let a = input[1].split(' ').map(n => parseInt(n, 10));
    //* ----------------------------
    // console.log(a);

    let sum = 0;
    for(let i = 0; i < n; i++) {
        if(a[i] > a[i+1]) {
            let x = (a[i] - a[i+1]);
            sum += x;
            a[i+1] += x;
        }
    }
    console.log(sum);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}