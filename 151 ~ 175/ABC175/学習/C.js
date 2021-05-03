// TODO
//*   ABC 177 C - Walking Takahashi

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let [x, k, d] = input[0].split(' ').map(n => parseInt(n, 10));
    //* ----------------------------
    // 負でも「座標の絶対値」なので、abs
    x = Math.abs(x);

    //* xをd（移動距離）で割った数（最低でもまっすぐに進む回数）
    let staright = Math.floor(x/d);
    //* xをd（移動距離）で割ったあまり
    let r = x % d;

    //* k回では近づくことが無理な場合
    if(staright >= k) return console.log(x - d*k);
    //* 余分に移動する回数
    let urouro = k - staright;

    if(urouro % 2 === 0) {
        //* 偶数なら、現在地
        console.log(r);
    } else {
        //* 奇数なら、一回分の距離を考慮
        console.log(Math.abs(r - d));
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));