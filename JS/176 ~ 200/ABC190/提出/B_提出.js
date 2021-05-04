// TODO
//*   ABC 190 B	Magic 3

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const args = input.trim().split("\n");
    //* 簡略化
    const [n, s, d] = args[0].split(' ').map(n => parseInt(n, 10));

    let ans = 'No';
    for(let i = 0; i < n; i++) {
        //* 行の要素を格納する
        let [x, y] = args[i + 1].split(' ').map(n => parseInt(n, 10));
        if(x < s && y > d) {
            ans = 'Yes';
            break;
        }
    }
    console.log(ans);

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