// TODO
//*   ABC 174 A - Air Conditioner

function main(input) {
    'use strict';
    const x = parseInt(input, 10);
    //* ---------------------------------
    if(x >= 30) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
}