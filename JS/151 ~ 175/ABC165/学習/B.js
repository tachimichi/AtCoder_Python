// TODO
//*   ABC 165 B - 1%

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const x = BigInt(input.trim());
    // console.log(x);
    // --------------------------
    //? 注意：10^18等は、桁数注意 
    let count = 0;
    let t = 100n;
    //* 福利の計算
    while(t < x) { // tがxに達していない時
        //* BigIntにmath.floorは使用できない
        t = t * 101n / 100n; 
        // t += Math.floor(t / 100);
        count++;
    }
    console.log(count);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));