// TODO
//*   ABC 186 B - Blocks on Grid

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.split('\n');
    let [n, m, t] = input[0].split(' ').map(n => parseInt(n, 10));
    //* ---------------------------------------------------------
    //* 空配列を作成して、行ごとに要素を追加していく
    let a = []; 
    let b = [];
    for(let i = 0; i < m; i++) {
        //* 行の要素を格納する
        [a[i], b[i]] = input[i + 1].split(' ').map(n => parseInt(n, 10));
    }
    //* ---------------------------------------------------------
    console.log(a);
    console.log(b);
    //* ---------------------------------------------------------
    let time = 0;
    let battery = n;
    
    for(let i = 0; i < m; i++) {
        let start = a[i];
        let end = b[i];
        const stay = end - start;
        const use = start - time;
        battery -= use;
        if(battery <= 0) {
            return console.log('No');
        }
        
        battery += stay;
        if(battery > n) {
            battery = n;
        }
        time = end;
    }

    battery -= (t -time);
    if(battery > 0) {
        console.log("Yes")
    } else {
        console.log("No");
    }



}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));