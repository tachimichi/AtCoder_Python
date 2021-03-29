// TODO
//*   ABC 197 B - Visibility

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let [h, w, x, y] = input[0].split(' ').map((n) => parseInt(n, 10));
    let a = [];
    for (let i = 1; i <= h; i++) {
        a.push(input[i]); 
    }

    x--;
    y--;
    let sum = 0;
    if(a[x][y] === '.') sum = 1;

    for(let i = y-1; i >= 0 && a[x][i]  === '.'; i--) sum++;
    for(let i = y+1; i < w && a[x][i]  === '.'; i++) sum++;
    for(let i = x-1; i >= 0 && a[i][y]  === '.'; i--) sum++;
    for(let i = x+1; i < h && a[i][y]  === '.'; i++) sum++;

    console.log(sum);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));