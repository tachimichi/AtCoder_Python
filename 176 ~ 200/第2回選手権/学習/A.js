// TODO
//*   第二回日本最強プログラマー学生選手権 


// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [x, y, z] = input.split(' ').map(n =>parseInt(n, 10));
    //* ------------------------
    const a = y/x;
    const b = z * a;
    if(y == b) {
        console.log(Math.floor(b)-1);
    } else {
        console.log(Math.floor(b));
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}