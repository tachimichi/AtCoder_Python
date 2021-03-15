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

    // 初期確認
    console.log(nums);
    console.log(num);
    console.log(a);
    console.log(b);
    console.log(min);
    console.log(`---------------------------------`);
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            let sum_min = 0;
            //* 同じ配列（＝同じ人間が作業）の場合
            console.log(`a[i]:${a[i]}と、b[i]:${b[j]}`);
            if(i === j) {
                // 合計を代入する
                sum_min = a[i] + b[i];
                console.log(`sum_min:${sum_min}`);
            } else { //* 異なる場合
                //* 大きい方を代入する
                sum_min = Math.max(a[i],b[j]);
                console.log(`sum_min:${sum_min}`);
            }
            //* 最小の判定
            min = Math.min(min, sum_min);
            console.log(`min:${min}`);
            console.log(`---------------------------------`);
        }
        console.log(`---------------------------------`);
    }
    // 結果表示
    console.log(min);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));