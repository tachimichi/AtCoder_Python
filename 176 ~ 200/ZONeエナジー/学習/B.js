// TODO
//*   ZONeエナジー B - 友好の印

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, d, h] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    // let [x, high] = input[1].trim().split(' ').map(n => parseInt(n, 10))

    let x = 0;
    let zero = 0;
    for(let i = 0; i < n; i++) {
        const [a, b] = input[i+1].split(' ').map(n => parseInt(n, 10));
        let m = (h-b)/(d-a);
        let t = m*(0-a)+b;
        zero = Math.max(t, zero);
    }
    
    if(zero > 0) {
        console.log(zero);
    } else {
        console.log(0);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
