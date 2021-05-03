// TODO
//*   ABC 161 B - Popular Vote

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].split(' ').map(n =>parseInt(n, 10));
    const a = input[1].split(' ').map(n =>parseInt(n, 10));
    // -----------------------
    // console.log(a);
    a.sort((a,b) => b - a);
    // console.log(a);
    
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += a[i];
    }

    if(a[m-1] >= sum/(4*m)) {
        console.log('Yes');
    } else {
        console.log('No');
    }

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));