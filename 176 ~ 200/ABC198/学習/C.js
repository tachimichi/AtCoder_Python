// TODO
//*   ABC 198 C - Compass Walking

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [r, x, y] = input.trim().split(' ').map(n => parseInt(n, 10));
    //* --------------------------------
    //* d^2を計算
    let d2 = x*x + y*y;
    let ans = 1;

    //* ceil(d/r)が基本
    while(1) {
        if(r*r*ans*ans >= d2) break;
        ++ans;
    }
    //* もし1の場合
    if(ans == 1) {
        //* d<rの時は1歩でいけないので場合分け
        if(r*r != d2) ans = 2;
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}