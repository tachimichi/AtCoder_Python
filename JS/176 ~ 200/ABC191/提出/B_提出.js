// TODO
//*   ABC 191 B - Remove It

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const args = input.split("\n");
    const NorX = args[0].split(" ");

    const N = parseInt(NorX[0], 10);
    const X = parseInt(NorX[1], 10);
    //* 配列としてするためにsplit(" ")
    const As = args[1].split(" ");

    let result = As.filter(a =>{
        // aを数値変換
        a = parseInt(a, 10);
        //* Xと不一致な数字を返す
        return a !== X;
    });
    // 空白区切りのため
    result = result.join(" ");
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