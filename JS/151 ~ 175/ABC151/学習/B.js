// TODO
//*   ABC 151 B - Achieve the Goal 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k, m] = input[0].split(' ').map(n => parseInt(n, 10));
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    //* --------------------------
    let sum = 0;
    for(let i = 0; i < a.length; i++) {
        sum += a[i];
    }

    let t = n*m - sum;
    if(t<=0) { 
        console.log(0);
    } else {
        if(t > k) {
            console.log(-1);
        } else {
            console.log(t);
        }
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));