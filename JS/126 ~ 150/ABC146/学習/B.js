// TODO
//*   ABC 146 B - ROT N

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let str = input[1].split('');
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

    //* -----------

    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let t = str[i];
        for (let j = 0; j < abc.length/2; j++) {
            if(t == abc[j]) ans += abc[j+n];
        }
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));