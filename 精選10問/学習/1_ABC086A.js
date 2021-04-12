/*
    title:
    ABC086A Product
*/

// 前提：JSは大文字小文字を区別するため気を付ける。
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    // inputの文字列を' 'で区切り配列として変化
    const args = input.split(' ');
    // paeseInt(文字列, 進数の指定)
    const a = parseInt(args[0], 10);
    const b = parseInt(args[1], 10);

    var seki = a * b;

    // 結果表示
    if(seki % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// '/dev/stdin'に判定用のデータが格納されていると考えられる。
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/1_ABC086A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}
