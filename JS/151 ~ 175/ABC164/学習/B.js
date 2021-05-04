// TODO
//*   ABC 164 B - Battle

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c, d] = input.trim().split(' ').map(n => parseInt(n, 10));
    // ----------------------------------
    const saki = Math.ceil(c/b);
    const ato = Math.ceil(a/d);

    if(saki <= ato) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));