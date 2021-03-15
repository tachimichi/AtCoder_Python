/*
    title:
    PracticeA	Welcome to AtCoder
*/
// 前提：JSは大文字小文字を区別するため気を付ける。
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を/n（改行）で区切り配列として格納
	input = input.split("\n");
    // inputの文字列を' 'で区切り配列として格納
	tmp = input[1].split(" ");
    // paeseInt(文字列, 進数の指定)
	var a = parseInt(input[0], 10);
	var b = parseInt(tmp[0], 10);
	var c = parseInt(tmp[1], 10);
	var s = input[2];

    // 結果表示
    console.log(a + b + c + ' ' +s);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// '/dev/stdin'に判定用のデータが格納されていると考えられる。
main(require('fs').readFileSync('/dev/stdin', 'utf8'));