// TODO
//*   第二回日本最強プログラマー学生選手権 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [x, y, z] = input.split(' ').map(n =>parseInt(n, 10));
    //* ------------------------
    const a = y/x;
    const b = z * a;
    const c = Math.floor(b)/z;
    if(a > c) {
        console.log(Math.floor(b));
    } else {
        console.log(Math.floor(b)-1);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
