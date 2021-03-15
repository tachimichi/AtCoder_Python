/*
    title:
    ABC 085 C - Otoshidama
    前提：JSは大文字小文字を区別するため気を付ける。
*/
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を' '（半角スペース）で区切り配列として格納
    const args = input.split(" ");
    const N = parseInt(args[0], 10), // 1要素目（紙幣の数）
            Yen = parseInt(args[1], 10); // 2要素目（合計金額）

    // オブジェクトのプロパティとして記述
    const result = {
        man: -1,
        gosen: -1,
        sen: -1,
    }

    // 計算処理
    for(let a = 0; a <= N; a++) { // 1万円の枚数を0 ~ Nで調べる
        for(let b = 0; b <= N - a; b++) { // 5千円の枚数を0 ~ (N -a)で調べる
            let c = N - (a + b); // 1000円の枚数は自動で決まる
            let total = 10000 * a + 5000 * b + 1000 * c;
            if(a + b + c === N && total === Yen) {
                result.man = a;
                result.gosen = b;
                result.sen = c;
                // 確認
                console.log(result);
            }
        }
    }
    // 結果表示
    console.log(`${result.man} ${result.gosen} ${result.sen}`);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/8_ABC085C.txt', 'utf8'));