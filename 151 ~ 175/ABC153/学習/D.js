// TODO
//*   ABC 153 A - Serval vs Monster

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let h = parseInt(input, 10);
    //* -------------------------------------
    let sum = 1;
    let counter = 1;

    while(h > 1) {
        //* 例：5 => 2 2 => 1 1 1 1
        h = Math.floor(h/2);

        //* 次の処理のステップ式
        counter = counter*2;
        sum += counter;
    }
    // console.log(counter);
    console.log(sum);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/D.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}
