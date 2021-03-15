// TODO
//*   ABC 106 B - 105

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    //* ------------------------------------------------------
    let ans = 0;
    
    //* 1以上N以下の奇数のうち, 正の約数を8個持つ
    //* 全探索
    for(let i =1; i <= n; i += 2) {
        let divisor = 0;
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) {
                divisor++;
            }
        }
        if(divisor === 8) {
            ans++;
        }
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));