// TODO
//*   ABC 194 A - I Scream 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const args = input.split(' ');
    const a = parseInt(args[0], 10);
    const b = parseInt(args[1], 10);

    const c = a + b;

    if(c >= 15 && b >= 8) {
        console.log('1');
    } else if(c>= 10 && b >= 3) {
        console.log('2');
    } else if(c >= 3) {
        console.log('3');
    } else {
        console.log('4');
    }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));