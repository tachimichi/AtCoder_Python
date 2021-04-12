// TODO
//*   ABC 189 B	Alcoholic

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const args = input.split("\n");
    const NorX = args[0].split(" ");

    const N = parseInt(NorX[0], 10);
    const X = parseInt(NorX[1], 10);
    //* 配列としてするためにsplit(" ")
    let VP = [];
    for(let i = 1; i <= N; i++) {
        VP.push(args[i].split(' ').map(n => parseInt(n, 10)));
    }

    let ans = -1;
    let sake = 0;
    //* --------------------------------------------------------------

    //* 100割るより、100掛けたほうがいい
    for(let i = 0; i < N; i++) {
        sake += VP[i][0] * VP[i][1];
        if(sake > X * 100) {
            ans += i + 2;
            //! breakしないと、更に増えていく
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