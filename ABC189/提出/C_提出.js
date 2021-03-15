// TODO
//*   ABC 189 C	Mandarin Orange
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split("\n");

    const n = parseInt(input[0], 10); //* n枚の皿
    const a = input[1].split(' ').map(n => parseInt(n, 10));

    //* ---------------------------------------------------------
    let result = 0;
    for(let left = 0; left < n; left++) {
        let x = a[left];
        for(let right = left; right < n; right++) {
            //* 始点(left)とa[right]を比較（最小を探す）
            x =Math.min(x, a[right]);
            //* 最小値*範囲の数(l<=rなので+1をする)
            result = Math.max(result, x * (right - left + 1));
        }
    }
    console.log(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
