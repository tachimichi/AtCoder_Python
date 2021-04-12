// TODO
//*   ABC 187 B - Gentle Pairs

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split("\n");
    const n = parseInt(input[0], 10);

    let count = 0;

    for(let i = 1; i < n; i++) {
        let [x1, y1] = input[i].split(" ").map(Number);
        for(let j = i+1; j <= n; j++) {
            let [x2, y2] = input[j].split(" ").map(Number);
            let a = (y2 - y1) / (x2 - x1);
            if (a <= 1 && a >= -1) {
                count++;
            }
        }
    }

    console.log(count);

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