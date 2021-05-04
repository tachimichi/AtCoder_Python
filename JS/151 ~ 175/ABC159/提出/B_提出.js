// TODO
//*   ABC 160 B - Golden Coins

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const x = parseInt(input, 0);
    // ------------------------
    let t = x % 500;
    let sum = Math.floor(x/500)*1000 + Math.floor(t/5)*5;
    console.log(sum);


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