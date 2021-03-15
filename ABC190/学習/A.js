// TODO
//*   ABC 190 A	Very Very Primitive Game

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const args = input.split(' ');
    const a = parseInt(args[0], 10);
    const b = parseInt(args[1], 10);
    const c = parseInt(args[2], 10);
    
    if( a === b){
        if(c === 0) {
            console.log('Aoki');
        } else {
            console.log('Takahashi');
        }
    } else if(a > b) {
        console.log('Takahashi');
    } else {
        console.log('Aoki');
    }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));