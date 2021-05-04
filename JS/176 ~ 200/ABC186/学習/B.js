// TODO
//*   ABC 186 B - Blocks on Grid

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split('\n');
    const [h, w] = input[0].split(' ').map(n => parseInt(n, 10));
    
    //* 空配列を作成して、行ごとに要素を追加していく
    let arr = []; 
    for(let i = 0; i < h; i++) {
        //* 行の要素を格納する
        let element = input[i + 1].split(' ').map(n => parseInt(n, 10));
        arr.push(element);
    }
    //* --------------------------------------------------
    //* 最小マスの全探索
    let min = 100;
    for(let i = 0; i < h; i++) {
        for(let j =0; j < w; j++) {
            min = Math.min(min, arr[i][j]);
        }
    }
    //* --------------------------------------------------
    //* 最小マスとの差分を足す
    let ans = 0;
    for(let i = 0; i < h; i++) {
        for(let j =0; j < w; j++) {
            if (arr[i][j] > min) {
                ans += arr[i][j] - min;
            }
        }
    }
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));