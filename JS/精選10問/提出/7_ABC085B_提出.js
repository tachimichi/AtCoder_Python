/*
    title:
    ABC 085 B - Kagami Mochi
    前提：JSは大文字小文字を区別するため気を付ける。
*/
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を/n（改行）で区切り配列として格納
    const args = input.split("\n");
    const N = parseInt(args[0], 10); // 1行目（餅の数）

    // 配列の作成
    const mochi_array = [];
    for(let i =1; i <= N; i++) { // 2行目(=args[1])スタートのため
        // push()⇒配列の末尾に1つ以上の要素を追加する
        mochi_array.push(parseInt(args[i], 10));
    }

    // 解答①：配列から（オブジェクトとして）重複した要素を取り除く
    let mochi_setArray = new Set(mochi_array);
    // 結果表示
    console.log(mochi_setArray.size);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/7_ABC085B.txt', 'utf8'));