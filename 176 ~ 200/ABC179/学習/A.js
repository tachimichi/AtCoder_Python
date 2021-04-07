// TODO
//*   ABC 179 A - Plural Form
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim();
    if(input.slice(-1) === 's') {
        console.log(`${input}es`);
    } else {
        console.log(`${input}s`);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));