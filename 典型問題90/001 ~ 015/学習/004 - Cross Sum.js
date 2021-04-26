// TODO
//*   004 - Cross Sum

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    //* 入力
    input = input.trim().split('\n');
    const [h, w] = input[0].split(' ').map(n => parseInt(n, 10));
    let a = [];
    for(let i = 1; i <= h; i++) {
        const t = input[i].trim().split(' ').map(n => parseInt(n, 10));
        a.push(t);
    }

    //* 前計算(縦と横をそれぞれ計算処理しとく)
    let row = [];
    let colum = [];
    for(let i = 0; i < h; i++) {
        let x = 0;
        for(let j = 0; j < w; j++) {
            x += a[i][j];
        }
        row.push(x);
    }

    for(let i = 0; i < w; i++) {
        let y = 0;
        for(let j = 0; j < h; j++) {
            y += a[j][i];
        }
        colum.push(y);
    }
    // console.log(row);
    // console.log(colum);
    // console.log('----------------------');
    //* -----------------------------------------------------------
    
    //* 答えの計算
    let ans = [];
    for(let i = 0; i < h; i++) {
        let block = [];
        for(let j = 0; j < w; j++) {
            let answer = row[i] + colum[j] - a[i][j]; 
            block.push(answer);
        }
        ans.push(block);
    }
    // console.log(ans);

    //* 出力
    for(let i = 0; i < h; i++) {
        console.log(...ans[i]);
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}