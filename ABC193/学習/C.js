// TODO
//*   ABC 192 C	A	Star

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を' 'で区切り配列として変化
    const args = input.trim().split(' ');
    const N = parseInt(args[0], 10);

    //! 重複した値は取り除きたい
    let setArray = new Set();

    //* 前提：2以上の整数a,bを用いてa^bと表せるものを列挙していく
    //* 探索範囲：√Nまで（a < √N、つまりa * a <= N）
    for(let a = 2; a * a <= N; a++) {
        // 2 * 2, 3 * 3, 4 * 4
        let x = a * a;
        console.log(`x:${x}`);
        // xがNを超えるまで
        while(x <= N) {
            // xを列挙していく
            setArray.add(x);
            console.log(setArray);
            //! a * (a + 1)の処理
            x *= a;
        }
    }

    // 列挙したものを取り除く
    let result = N - setArray.size;
    console.log(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
