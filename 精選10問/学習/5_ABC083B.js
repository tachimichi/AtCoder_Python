/*
    title:
    ABC 083 B - Some Sums
    前提：JSは大文字小文字を区別するため気を付ける。
*/

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を（半角スペース）で区切り配列として格納
    const args = input.split(" ");
    let N = parseInt(args[0], 10), // 1以上の整数
        min = parseInt(args[1], 10), // 桁の和の最小桁となる基準値
        max = parseInt(args[2], 10); // 桁の和の最大桁となる基準値

    // answerの初期設定
    let answer = 0;

    // 初期表示
    console.log(`初期条件`);
    console.log(`1以上の整数: ${N}`);
    console.log(`min: ${min}`);
    console.log(`max: ${max}`);
    console.log(`-------------------------`);

    // 整数Nまで、ループ処理
    for(let i = 0; i <= N; i++) {
        // 関数getSumOfDigits()に入れ、計算処理
        let digitSum = getSumOfDigits(i);
        // min<=digitSum<=maxの場合
        if(min <= digitSum && digitSum <= max) {
            console.log(`OK：${i}`);
            // A以上B以下であるものの総和として取り込む
            answer += i;
        } else {
            console.log(`NG：${i}`);
        }
        console.log(`途中経過：${answer}`);
    }
    // 結果表示
    console.log(`-------------------------`);
    console.log(`総和：${answer}`);
}

// 各桁数の計算処理
function getSumOfDigits(value) {
    // 初期設定
    let sum = 0;
    // 値が0より大きいならループ処理
    while(value > 0) {
        // 10で割った余りを算出（例：1024⇒4）
        sum += (value % 10);
        // 10で割る（1桁小さくする。例：1024⇒102）
        // Math.floor()⇒数値以下の最大の整数を返す
        value = Math.floor(value / 10);
    }
    // 関数に返す値を指定
    return sum;
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// '/dev/stdin'に判定用のデータが格納されていると考えられる。
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/5_ABC083B.txt', 'utf8'));