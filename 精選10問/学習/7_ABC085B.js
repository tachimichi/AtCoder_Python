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

    // 初期表示
    console.log(`初期条件`);
    console.log(`餅の数: ${N}`);
    console.log(`各餅の直径(cm): ${mochi_array}`);
    console.log(`mochi_arrayの型：${typeof mochi_array}`);
    console.log(`-------------------------`);

    // 解答①：配列から（オブジェクトとして）重複した要素を取り除く
    console.log(`解答①：配列から（オブジェクトとして）重複した要素を取り除く`);
    let mochi_setArray = new Set(mochi_array);
    // 結果表示
    console.log(`重複削除後：${mochi_setArray}`);
    console.log(mochi_setArray);
    console.log(`mochi_setArrayの型：${typeof mochi_setArray}`);
    console.log(`mochi_setArrayの要素数(size)：${mochi_setArray.size}`);
    console.log(`-------------------------`);
    
    // ①の補足（オブジェクト⇒配列へ変換）
    console.log(`①の補足（オブジェクト⇒配列へ変換）`);
    const from = Array.from(mochi_setArray);
    // 結果表示
    console.log(`重複削除後：${from}`);
    console.log(`fromの型：${typeof from}`);
    console.log(`fromの要素数(length)：${from.length}`);
    console.log(`-------------------------`);
    
    // 解答②：配列から（配列として）重複した要素を取り除く
    console.log(`解答②：配列から（配列として）重複した要素を取り除く`);
    let mochi_setArray2 = [...new Set(mochi_array)];
    // 結果表示
    console.log(`重複削除後：${mochi_setArray2}`);
    console.log(`mochi_setArray2の型：${typeof mochi_setArray2}`);
    console.log(`mochi_setArray2の要素数(length)：${mochi_setArray2.length}`);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/7_ABC085B.txt', 'utf8'));