// TODO
//*   ABC 146 A - Can't Wait for Holiday

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const str = input.trim();

    switch (str) {
        case "SAT":
            console.log(1);
            break;
        case "SUN":
            console.log(7);
            break;
        case "MON":
            console.log(6);
            break;
        case "TUE":
            console.log(5);
            break;
        case "WED":
            console.log(4);
            break;
        case "THU":
            console.log(3);
            break;
        case "FRI":
            console.log(2);
            break;
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