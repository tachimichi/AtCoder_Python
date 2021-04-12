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

    const isBuy = nums.map(n => {
        let nArray = n.split(' ');
        let A = parseInt(nArray[0], 10);
        let P = parseInt(nArray[1], 10);
        let X = parseInt(nArray[2], 10);
        
        let zaiko = X - A;

        if(P_best === 0) {
            P_best = P;
        }

        if(zaiko > 0 && P_best != 0 && P_best > P) {
            P_best = P;
            result = P;
        } 
    });

    console.log(result);

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