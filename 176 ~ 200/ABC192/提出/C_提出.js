// TODO
//*   ABC 192 C	Kaprekar Number

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を' 'で区切り配列として変化
    const args = input.split(' ');
    let N = args[0];
    let K = args[1];

    //* K回ループ処理
    for(let i = 0; i < K; i++) {
        let num_g1 = g1(N);
        let num_g2 = g2(N);
        let num_num = f3(num_g1, num_g2);
        //* 数字だとg1(),g2()を処理できないため
        N = num_num.toString();
    }
    //* 結果表示（数字変換）
    console.log(Number(N));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/C.txt', 'utf8'));

//* 降順に並び替え（文字列⇒数字）
function g1(num) {
    //* 簡略化
    return Number(num.split("").sort().reverse().join(""));
}
//* 昇順に並び替え（文字列⇒数字）
function g2(num) {
    //* 簡略化
    return Number(num.split("").sort().join(""));
}
//* （数字⇒数字）
function f3(A, B) {
    return A - B;
}
