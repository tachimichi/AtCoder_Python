// TODO
//*   ABC 160 C - Traveling Salesman around Lake
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [k, n]  = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    // -----------------------------
    //* 初期値の設定(「スタート地点と1番目の距離」)
    let maxDistance = a[0];
    console.log('maxDistance', maxDistance);

    //* 「aとa-1番目の距離」と、maxDistanceの比較
    for(let i = 1; i < a.length; i++) {
        maxDistance = Math.max(maxDistance, a[i]-a[i-1]);
    }
    //* 「1番目とn番目の距離（絶対値）」と、maxDistanceの比較
    console.log('maxDistance', maxDistance);
    maxDistance = Math.max(maxDistance, Math.abs(k-a[n-1]+a[0]));
    console.log('maxDistance', maxDistance);

    console.log(k -maxDistance);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));