// TODO
//*   ABC 182 C - To 3

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let n = parseInt(input, 10);
    let f = input.split('').map(n => parseInt(n, 10));
    //* ----------------------------
    console.log(n);
    console.log(f);
    const x = n % 3;
    console.log(x);

    let s = 0;
    let k = 0;
    while(n) {
        let d = n % 10;
        
    }

    if(x === 0) return console.log(0);
    else if (x === 1) {

    }
    
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
