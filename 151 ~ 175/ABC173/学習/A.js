// TODO
//*   ABC 173 A - Payment

function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    //* ---------------------------------
    let otsuri = 0;
    for(let i = 1; i <= 10; i++) {
        if(1000*i >= n) {
            otsuri = 1000*i - n;
            return console.log(otsuri);
        }
    }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
}