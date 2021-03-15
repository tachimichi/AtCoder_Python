// TODO
//*   ABC 195 C - Comma

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    let ans = 0;
    //* --------------------------------
    if(n >= 1000) {
        ans += n - 999;
    }
    if(n >= 1000000) {
        ans += n - 999999;
    }
    if(n >= 1000000000) {
        ans += n - 999999999;
    }
    if(n >= 1000000000000) {
        ans += n - 999999999999;
    }
    if(n >= 1000000000000000) {
        ans += n - 999999999999999;
    }

    console.log(ans);
    
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
