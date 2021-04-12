/*
    title:
    ABC 088 B - Card Game for Two
    前提：JSは大文字小文字を区別するため気を付ける。
*/

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を/n（改行）で区切り配列として格納
    const args = input.split("\n");
    let N = parseInt(args[0], 10), // 1以上100以下の整数
        array1 = args[1].split(' '), // i枚目のカードには、Aiという数字
        // 全ての値に「指定した処理」を行った値を格納した新しい配列を作成する
        cards = array1.map(x => parseInt(x, 10));
    
    // 各スコアの初期設定
    let alice = 0;
    let bob = 0;

    // 初期表示
    console.log(`初期条件`);
    console.log(`1以上100以下の整数: ${N}`);
    console.log(`array1: ${array1}`);
    console.log(`cards: ${cards}`);
    console.log(`-------------------------`);

    // // 解答①：降順（第1引数と第2引数を比較）
    // console.log(`並び替え前：${cards}`);
    // cards.sort(
    //     function(a,b) {
    //         if(a > b) { // 正の時
    //             return -1; // 引数1を引数2の前へ移動
    //         } else if(a < b) { // 負の時
    //             return 1; // 引数1を引数2の後ろへ移動 
    //         } else {
    //             return 0; // 何もしない
    //         }
    //     }
    // );
    // console.log(`並び替え後（降順）：${cards}`);

    // // 解答②：降順（第1引数と第2引数の差⇒比較関数）
    // console.log(`並び替え前：${cards}`);
    // cards.sort(
    //     function(a,b) {
    //         // 戻り値が正(b -aの差が正)のとき、aをbの前に並び替え
    //         // 戻り値が正(b -aの差が負)のとき、aをbの後ろ並び替え
    //         return b - a;
    //     }
    // );
    // console.log(`並び替え後（降順）：${cards}`);

    // 解答③：降順（アロー関数：解答②の簡略化）
    console.log(`並び替え前：${cards}`);
    cards.sort((a,b) =>b - a);
            // 戻り値が正(b -aの差が正)のとき、aをbの前に並び替え
            // 戻り値が正(b -aの差が負)のとき、aをbの後ろ並び替え
    console.log(`並び替え後（降順）：${cards}`);


    // ゲーム処理
    for(let i = 0; i < N; i++) {
        // 奇数の場合（＝アリスが先にカードを取得する）
        if(i % 2 === 0) { 
            alice += cards[i];
        } else { // 偶数の場合（＝ボブ）
            bob += cards[i];
        }
    }
    // ゲーム終了時
    console.log(`-------------------------`);
    console.log(`Alice：${alice}`);
    console.log(`Bob：${bob}`);
    
    // result処理
    let result = alice - bob;

    // 結果表示
    console.log(`-------------------------`);
    console.log(`AliceがBobより何点多くとるか：${result}`);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// '/dev/stdin'に判定用のデータが格納されていると考えられる。
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/6_ABC088B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}