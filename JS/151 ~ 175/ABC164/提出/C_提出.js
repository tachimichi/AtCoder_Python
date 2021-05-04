// TODO
//*   ABC 164 C - gacha
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let str = [];
    for(let i = 1; i < input.length; i++) {
        const hoge = input[i].trim();
        str.push(hoge);
    }
    // console.log(str);
    
    str = Array.from(new Set(str));
    // console.log(str);
    console.log(str.length);
    
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}