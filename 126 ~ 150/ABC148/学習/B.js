// TODO
//*   ABC 148 B - Strings with the Same Length

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let [s, t] = input[1].trim().split(' ').map(n => n);
    
    let str = '';
    for(let i = 0; i < n; i++) {
        str += s[i]+t[i];
    }
    console.log(str);

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));