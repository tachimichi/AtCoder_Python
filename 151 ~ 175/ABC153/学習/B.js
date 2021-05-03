// TODO
//*   ABC 153 B - Common Raccoon vs Monster

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [h, n] = input[0].split(' ').map(n => parseInt(n, 10));
    const a = input[1].split(' ').map(n => parseInt(n, 10)).sort((a, b) => b - a); // 降順
    // console.log(a);
    //* --------------
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += a[i];
        if(sum >= h) return console.log('Yes');
    }
    console.log('No');

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));