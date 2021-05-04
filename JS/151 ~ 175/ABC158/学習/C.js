// TODO
//*   ABC 158 C - Tax Increase
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    //* -------------------
    let min = 1010; //* 1010以上の場合、10%=>101円となる

    for(let i = 0; i < 1010; i++) {
        let t1 = Math.floor(i*0.08);
        let t2 = Math.floor(i*0.1);
        if(t1 == a && t2 == b) return console.log(i);
    }
    console.log(-1);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));