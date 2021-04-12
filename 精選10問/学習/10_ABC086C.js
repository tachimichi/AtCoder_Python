
// TODO
//*   ABC 086 C - Traveling
//!   前提：JSは大文字小文字を区別するため気を付ける。

//* 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // inputの文字列を\n（改行）で区切り配列として格納
    const args = input.split("\n");
    const N = parseInt(args[0], 10);
    // N以外の連続した数字を配列として取得
    //* arr.slice([1[, 4]])⇒要素の2番目から4番目まで取得する。
    //* args.slice(1, N + 1)⇒2番目から要素の最後(N + 1)まで取得
    const nums = args.slice(1, N + 1);

    //* (現在地と、次の目的地への距離を)比較するための変数の初期設定
    let t_old = 0;
    let x_old = 0;
    let y_old = 0;

    const isValid = nums.every((n) => {
        let nArray = n.split(' ');
        let t = parseInt(nArray[0], 10);
        let x = parseInt(nArray[1], 10);
        let y = parseInt(nArray[2], 10);

        //* t歩と目標地点の差が偶数か（遠回りする場合は偶数歩となる）
        var sum =  x + y;
        const A = (t - sum) % 2

        //* 現地点から次の地点までの最短到達が可能かどうか(絶対値)
        //? t歩>次のxyの移動距離 である必要がある
        let t_abs = Math.abs(t - t_old);
        let xy_abs = Math.abs((x - x_old) + (y - y_old));

        // nとn+1を比較するため、代入
        t_old = t;
        x_old = x;
        y_old = y;

        //* 条件A：t歩が目標地点到達可能か
        //* 条件B：t歩と目標地点の差が偶数か（遠回りする場合は偶数歩となる）
        //* 条件C：現地点から次の地点までの最短到達が可能かどうか
        return (t >= sum) && (A === 0) && (t_abs >= xy_abs);
    });
    
    //* 結果判定処理
    if (isValid) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/10_ABC086C.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}