// TODO
//*   ABC 166 A - A?C

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim();
    if(input == 'ABC') {
        console.log('ARC');
    } else {
        console.log('ABC');
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}