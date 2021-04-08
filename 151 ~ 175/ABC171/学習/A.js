// TODO
//*   ABC 171 A - αlphabet

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const str = input.trim();
    if(str === str.toUpperCase()) {
        console.log('A');
    } else {
        console.log('a');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
}