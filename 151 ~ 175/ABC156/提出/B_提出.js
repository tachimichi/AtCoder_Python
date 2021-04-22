// TODO
//*   ABC 157 B - Bingo

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    //* 変数の初期設定
    input = input.trim().split('\n');

    let Bingo = [];
    for(let i = 0; i < 3; i++) 
        input[i].split(' ').map(n => Bingo.push(parseInt(n, 10)));
    let n = parseInt(input[3], 10);
    let b = [];
    for(let i = 4; i < n+4; i++) 
        b.push(parseInt(input[i], 10));
    //* ---------------------------------------------
    let t = Array(9).fill(false);
    for(let i = 0; i < n; i++) 
        for(let j = 0; j < Bingo.length; j++) 
            if(Bingo[j] == b[i]) t[j] = true;
    //* ---------------------------------------------
    let ans = 'No';
    for(let i = 0; i < 9; i += 3) 
        if(t[0+i] && t[1+i] && t[2+i]) ans = 'Yes';

    for(let i = 0; i < 3; i++) 
        if(t[0+i] && t[3+i] && t[6+i]) ans = 'Yes';
    if(t[0] && t[4] && t[8]) ans = 'Yes';
    if(t[2] && t[4] && t[6]) ans = 'Yes';
    
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}