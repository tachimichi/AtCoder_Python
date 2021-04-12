// TODO
//*   ABC 198 B - Easy Linear Programming

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const k = parseInt(input[0], 10);
    let s = input[1].split('');
    // console.log(s.join(''));
    //* -------------------------------
    //* 文字数がk以下の場合分け
    if(s.length <= k) {
        return console.log(s.join(''));
    } else {
        let str = s.slice(0, k);
        str = str.join('');
        console.log(str + '...');
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}