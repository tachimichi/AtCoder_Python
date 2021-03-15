
// TODO
//*    ABC 049 C - Daydream
//!   前提：JSは大文字小文字を区別するため気を付ける。

//* 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';

    const WORDS = ['dream', 'dreamer', 'erase', 'eraser'].map(x => reverseString(x));
    // inputを引数にして、reverseString関数を呼び起こす
    //! AtCoderのJSは改行文字が入力されるのでtrim()で取り除く
    const S_args = reverseString(input.trim());

    let stringNum = 0;

    //* 文字数がS（問題の文字列）の文字数を超えるまで
    while(stringNum < S_args.length) {
        //* WORDS（配列）から1つずつfindする
        //! findはtrueで返ってきた値の要素を返す
        let search_Words = WORDS.find(word => {
            // S（問題の文字列）に前方一致するかbooleanで返す
            //* 開始位置は第2引数
            const isWords = S_args.startsWith(word, stringNum);
            //* trueで値を返す
            return isWords;
        });

        if(search_Words) {
            stringNum += search_Words.length;
        } else {
            console.log('NO');
            return;
        }
    }
    console.log('YES');
}

//* 文字列反転処理
function reverseString(str) {
    return str.split("").reverse().join("");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
// main(require('fs').readFileSync('../txt/9_ABC049C.txt', 'utf8'));