// TODO
//*   ABC 193 B	uNrEaDaBlE sTrInG

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const args = input.split("\n");
    //* 文字列を1文字ずつ分割
    const str = args[0].split("");

    // 初期設定
    let result = true;

    for(let i = 0; i < str.length; i++) {
        if(i % 2 === 0) { //* 文字列str[i]が奇数の処理
            //* 奇数!=小文字かどうか判別
            if(str[i] !== str[i].toLowerCase()) {
                result = false;
            }
        } else { //* 文字列str[i]が偶数の処理
            //* 偶数!=大文字かどうか判別
            if(str[i] !== str[i].toUpperCase()) {
                result = false;
            }
        }
    }

    if(result) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// '/dev/stdin'に判定用のデータが格納されていると考えられる。
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}