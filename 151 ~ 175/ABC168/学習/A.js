// TODO
//*   ABC 168 A - ∴ (Therefore) 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    const keta = n % 10;
    //* -----------------------
    switch (keta) {
        case 2:
        case 4:
        case 5:
        case 7:
        case 9:
            console.log('hon');
            break;
    
        case 0:
        case 1:
        case 6:
        case 8:
            console.log('pon');
            break;

        default:
            console.log('bon');
            break;
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));