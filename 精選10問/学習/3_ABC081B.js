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

    let count= 0;
    let flag = true;

    // 初期設定の確認
    console.log(`整数の数：${Num}`);
    console.log(`正の整数：${tmp}`);
    console.log(`フラグ：${flag}`);
    console.log('--------------------------------');

    // フラグがtrueの場合
    while(flag) {
        for(let i = 0; i < Num; i++) {
            console.log('-------for文：');
            // 配列tmpのi番目の文字列を整数化
            let EvenOrNot = parseInt(tmp[i], 10);
            console.log(`EvenOrNot（対象要素）：${EvenOrNot}`);
            // 整数化した数値が偶数なら
            if(EvenOrNot % 2 !== 0) {
                console.log('-------if文：falseパターン');
                // フラグをfalseにして、強制終了
                flag = false;
                console.log(`flag：${flag}`);
                break;

            } else {
                console.log('-------if文：trueパターン');
                // tmp[i]を2で割って、格納する
                tmp[i] = tmp[i] / 2;
                console.log(`tmp[i]：${tmp[i]}`);
            }

            console.log(`if文終了時のflag：${flag}`);
            console.log(`正の整数：${tmp}`);
        }
        // for文が一周しても、フラグがtrueなら
        console.log(`for文終了時のflag：${flag}`);
        if(flag === true) {
            count += 1;
        }
        console.log(`現段階の操作回数（周）：${count}`);
    }

    // 結果表示
    console.log(`最終操作回数（周）：${count}`);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// '/dev/stdin'に判定用のデータが格納されていると考えられる。
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/3_ABC081B.txt', 'utf8'));