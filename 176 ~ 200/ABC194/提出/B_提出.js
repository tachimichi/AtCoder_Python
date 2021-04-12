// TODO
//*   ABC 194 B	Job Assignment

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const args = input.trim().split("\n");
    const n = parseInt(args[0], 10);
    //! args.slice(1, N + 1)⇒2番目から要素の最後(N + 1)まで取得
    const nums = args.slice(1, n + 1);
    const num = nums.map(n => n.split(" "));
    const a = num.map(n => parseInt(n[0], 10));
    const b = num.map(n => parseInt(n[1], 10));

    let min = a[0] + b[0];
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            let sum_min = 0;
            //* 同じ配列（＝同じ人間が作業）の場合
            if(i === j) {
                // 合計を代入する
                sum_min = a[i] + b[i];
            } else { //* 異なる場合
                //* 大きい方を代入する
                sum_min = Math.max(a[i],b[j]);
            }
            //* 最小の判定（小さい方をanswer）
            min = Math.min(min, sum_min);
        }
    }
    // 結果表示
    console.log(min);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}