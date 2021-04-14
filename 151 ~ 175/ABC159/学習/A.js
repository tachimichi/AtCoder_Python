// TODO
//*   ABC 159 A - The Number of Even Pairs
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, m] = input.trim().split(' ').map(n => parseInt(n, 10));
    // ---------------
    // console.log(n+m);
    let ans = 0;
    //* 全ての方法の数を求めて、nとm両方から引いたパターンは除く
    //? 偶数+偶数 = 偶数
    //? 偶数+奇数 = 奇数（これは除くべき対象）
    //? 奇数+奇数 = 偶数
    ans = (n+m)*(n+m-1)/2 -(n*m);
    console.log(ans);

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}
