// TODO
//*   第二回日本最強プログラマー学生選手権 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [x, y, z] = input.split(' ').map(n =>parseInt(n, 10));
    //* ------------------------
    console.log(Math.floor((y*z-1)/x));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));