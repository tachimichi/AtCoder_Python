// TODO
//*   ABC 163 C - management
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    // console.log(a);
    //* -----------------------------------
    // 要素n個の配列を作成
    let t = new Array(n).fill(0);
    //* a[i]番目をカウントする⇒部課の数をカウントする
    for(let i = 0; i < n-1; i++) {
        t[a[i]-1]++;
    }
    // t.forEach(element => {
    //     console.log(element);
    // });
    for(let i = 0; i < t.length; i++) {
        console.log(t[i]);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));