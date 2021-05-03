// TODO
//*   第二回日本最強プログラマー学生選手権 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    // console.log(input);
    const [n, m] = input[0].split(' ').map(n => parseInt(n, 10));
    let a = input[1].split(' ').map(n => parseInt(n, 10));
    let b = input[2].split(' ').map(n => parseInt(n, 10));
    //* ------------------
    let x = a.filter(val => !b.includes(val));
    let y = b.filter(val => !a.includes(val));
    let c = x.concat(y);
    c.sort((a,b) => a - b);
    c = c.join(' ');
    console.log(c);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));