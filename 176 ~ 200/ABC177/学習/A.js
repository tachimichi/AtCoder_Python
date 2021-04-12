// TODO
//*   ABC 177 A - Don't be late

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [d, t, s] = input.split(' ').map(n => parseInt(n, 10));
    //* --------------------------------
    if(s * t >= d) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}