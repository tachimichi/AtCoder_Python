/*
    title:
    ABC081A	Placing Marbles
*/

// 前提：JSは大文字小文字を区別するため気を付ける。
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を'1'で区切り配列として変化
    const args = input.split('1');

    // 結果表示
    // 1の数を数える（区切り数 - 1) 例：
    console.log(args.length - 1);
    console.log(args);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// '/dev/stdin'に判定用のデータが格納されていると考えられる。
main(require('fs').readFileSync('../txt/2_ABC081A.txt', 'utf8'));