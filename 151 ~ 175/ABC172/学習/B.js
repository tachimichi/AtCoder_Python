// TODO
//*   ABC 172 B - Minor Change

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    // const s = input[0].trim().split('');
    // const t = input[1].trim().split('');
    const s = input[0].split('');
    const t = input[1].split('');
    //* -----------------------------
    // console.log(s);
    // console.log(t);
    //* -----------------------------
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] != t[i]) count++;
    }
    console.log(count);
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