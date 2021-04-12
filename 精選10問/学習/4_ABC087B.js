/*
    title:
    ABC 087 B - Coins
    
    前提：JSは大文字小文字を区別するため気を付ける。
*/


// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を\n（改行）で区切り配列として格納
    const args = input.split("\n");
    const A = parseInt(args[0], 10), // 500 yen
            B = parseInt(args[1], 10), // 100 yen
            C = parseInt(args[2], 10), // 50 yen
            X = parseInt(args[3], 10); // x yen

    let count = 0;
    let NotCount = 0;

    // 初期表示
    console.log(`初期枚数`);
    console.log(`500: ${A} 枚`);
    console.log(`100: ${B} 枚`);
    console.log(`50: ${C} 枚`);
    console.log(`目標金額: ${X} 円`);
    console.log(`-------------------------`);


    // iがA（500円玉の数）までループする + 先足し
    for(let i = 0; i <= A; ++i) {
        // jがB（100円玉の数）までループする + 後足し
        for(let j = 0; j <= B; j++) {
            // kがC（50円玉の数）までループする + 後足し
            for(let k = 0; k <= C; k++) {
                console.log(`500: ${i}`);
                console.log(`100: ${j}`);
                console.log(`50: ${k}`);
                // 合計金額
                let sum = (i * 500) + (j * 100) + (k *50);
                console.log(`合計金額: ${sum}`);
                
                // 合計金額がXと一致する場合
                if(sum === X) {
                    ++count;
                    console.log(`できる: ${count}`);
                } else {
                    ++NotCount;
                    console.log(`できない: ${NotCount}`);
                }
                console.log(`----------------`);
            }
        } 
    }
    // 結果表示
    console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// '/dev/stdin'に判定用のデータが格納されていると考えられる。
try {
    main(require('fs').readFileSync('../txt/4_ABC087B.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}