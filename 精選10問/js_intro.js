
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/_.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}