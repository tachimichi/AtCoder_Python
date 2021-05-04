// TODO
//*   ABC 189 A	Slot

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const args = input.split('');
    const a = args[0];
    const b = args[1];
    const c = args[2];


    if(a === b && b === c) {
        console.log(`Won`);
    } else {
        console.log(`Lost`);
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