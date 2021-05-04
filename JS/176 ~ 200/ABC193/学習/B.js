// TODO
//*   ABC 193 B	Play Snuke

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';

    const args = input.split("\n");
    const N = parseInt(args[0], 10);
    // N以外の連続した数字を配列として取得
    //* arr.slice([1[, 4]])⇒要素の2番目から4番目まで取得する。
    //* args.slice(1, N + 1)⇒2番目から要素の最後(N + 1)まで取得
    const nums = args.slice(1, N + 1);

    let result = -1;
    let P_best = 0;

    nums.map(n => {
        // 配列から各々、情報を取得
        let nArray = n.split(' ');
        let A = parseInt(nArray[0], 10);
        let P = parseInt(nArray[1], 10);
        let X = parseInt(nArray[2], 10);
        let zaiko = X - A; // 在庫（個数 - n秒）

        //* 前提条件：最初の店舗は無条件で最安値となる
        if(P_best === 0) {
            P_best = P;
        }

        //* 条件A:在庫があるか
        //* 条件B:P_bestに値が入っているか（値段が0円の店は存在しない）
        //* 条件C:P_bestとPの大小関係（Pが安いと、最小金額を更新する）
        if(zaiko > 0 && P_best != 0 && P_best > P) {
            P_best = P;
            result = P;
        } 
    });
    
    // 結果表示
    console.log(result);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// '/dev/stdin'に判定用のデータが格納されていると考えられる。
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));