// TODO
//*   ABC 193 A	Discount

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を' 'で区切り配列として変化
    const args = input.split(' ');
    // paeseInt(文字列, 進数の指定)
    const A = parseInt(args[0], 10);
    const B = parseInt(args[1], 10);

    const percent = 100 - (B / A * 100);

    console.log(percent);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/A.txt', 'utf8'));