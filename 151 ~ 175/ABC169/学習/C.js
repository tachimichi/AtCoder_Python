// TODO
//*   ABC 169 C - Multiplication 3

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split(' ');
    const a = BigInt(input[0]);
    const b = BigInt(input[1].split('.').join(''));
    //* --------------------------------
    // console.log(a);
    // console.log(b);
    const ans = a*b/100n;
    console.log(ans.toString());
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));