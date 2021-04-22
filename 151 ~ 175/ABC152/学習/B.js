// TODO
//*   ABC 152 B - Comparing Strings

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [a, b] = input.trim().split(' ');
    let t1 = a;
    let t2 = b;
    for(let i = 1; i < b; i++) 
        t1 += a;
    for(let i = 1; i < a; i++) 
        t2 += b;
    // console.log(t1, t2);

    //* -----------------------
    const t = [t1, t2];
    // console.log(t);
    t.sort();
    console.log(t[0]);
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