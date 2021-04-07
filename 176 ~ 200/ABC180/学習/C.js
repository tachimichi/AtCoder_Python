// TODO
//*   ABC 180 C - Cream puf

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let n = parseInt(input, 10);
    let array = [];
    //* ------------------------------
    for(let i = 1; i * i <= n; i++) {
        let x = n / i;
        if(Number.isInteger(x)) {
            array.push(x, i);
        }
    }
    let ans = Array.from(new Set(array));
    ans.sort(
        function(a,b) {
            return a - b;
        }
    )
    ans.forEach(element => {
        console.log(element);
    });
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));