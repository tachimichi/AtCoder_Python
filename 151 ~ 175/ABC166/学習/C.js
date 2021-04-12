// TODO
//*   ABC 167 C - Skill Up

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m, x] = input[0].trim().split(' ').map(n => parseInt(n, 10)); // 1行目の取得
    input.shift(); //* 1行目の削除（破壊的メソッド）
    //* 行に対するmap処理と、要素に対するmap処理
    let books = input.map(element => element.split(' ').map(n => parseInt(n, 10)));
    console.log(`n, m, x`, n, m, x);
    console.log(books);
    //* --------------------------------
    //? 前提：n冊の参考書を買うor買わない「2^n(12) => 4096通り」
    //? 達成条件：M個のアルゴリズムの理解度がx以上 && 金額が最小値
    //? --------------------------------------------------------------
    //? 2進数の論理積：(i>>j) & 1)
    //? iをj回、右にシフトさせる（割る2的な）、右端にある数値が(2進数で)1かどうか判断する
    //? 買う場合を1、買わない場合を0と考えて、スキルの最小値がx以上かどうか判定する
    //? x以上の場合、リストに追加していく
    //? リストを昇順に並び替えると、最小値が判明する（空のリストの場合は、-1）
    //* --------------------------------
    let sum;
    let min = 1e+10;
    for(let i = 0; i < 2**n; i ++) {
        //* 配列の生成
        let t = new Array(m+1).fill(0);
        sum = 0;
        console.log(`t:`);
        console.log(t);
        console.log(`*********************`);
        // ----------------------
        for(let j = 0; j < n; j++) {
            // jを1回、左シフトする && 論理積が1
            //* 買う選択した場合（bit全探索）
            if(i & (1 << j)) {
                for(let k = 0; k <= m; k++) {
                    t[k] += books[j][k];
                    console.log(t);
                    console.log(`-------------------`);
                }
            }
        }

        //* i番目の探索した結果について
        let isBig = true;
        for(let l = 1; l <= m; l++) {
            // t[l]番目の能力がx以上あるかどうか
            if(t[l] < x) {
                isBig = false;
                break;
            }
        }
        //* 個々の能力がm以上ある場合、金額が最小か判定する
        if(isBig) min = Math.min(t[0], min);
    }
    // もし最小が1e+10の場合は、-1
    // 否定の場合、minを出力する
    if(min != 1e+10){
        console.log(min);
    } else {
        console.log(-1);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}