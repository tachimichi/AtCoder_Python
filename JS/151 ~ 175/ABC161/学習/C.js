// TODO
//*   ABC 161 C - Replacing Integer
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, k] = input.trim().split(' ').map(n => BigInt(n));
    // console.log(n, k);
    // -----------------------
    const r = n % k;
    const t = k - r;

    if(r < t) {
        console.log(r.toString());
    } else {
        console.log(t.toString());
    }

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));