/*
    title:
    ABC 081 B Shift Only
*/
// 前提：JSは大文字小文字を区別するため気を付ける。
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を/n（改行）で区切り配列として格納
    input = input.split("\n");
    // Nの値をNumとして格納
	let Num = parseInt(input[0], 10);
    // inputの文字列（2行目）を' 'で区切り配列として格納
    
	let tmp = input[1].split(" ");
    // 初期設定（カウントとフラグ）
    let count= 0;
    let flag = true;

    // フラグがtrueの場合
    while(flag) {
        for(let i = 0; i < Num; i++) {
            // 配列tmpのi番目の文字列を整数化
            let EvenOrNot = parseInt(tmp[i], 10);
            // 整数化した数値が偶数なら
            if(EvenOrNot % 2 !== 0) {
                // フラグをfalseにして、強制終了
                flag = false;
                break;
            } else {
                // tmp[i]を2で割って、格納する
                tmp[i] = tmp[i] / 2;
            }
        }
        // for文が一周しても、フラグがtrueなら
        if(flag === true) {
            count += 1;
        }
    }
    // 結果表示
    console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// '/dev/stdin'に判定用のデータが格納されていると考えられる。
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../text.txt', 'utf8'));