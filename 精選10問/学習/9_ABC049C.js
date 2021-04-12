
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

    //* 中身確認
    console.log(WORDS);
    console.log(`WORDS：${WORDS}`);
    console.log(`S_args：${S_args}`);
    console.log(`${S_args}の文字数：${S_args.length}`);
    console.log(`----------------------------`);

    let stringNum = 0;

    //* 文字数がS（問題の文字列）の文字数を超えるまで
    while(stringNum < S_args.length) {
        //* WORDS（配列）から1つずつfindする
        //! findはtrueで返ってきた値の要素を返す
        let search_Words = WORDS.find(word => {
            // 検索対象となる要素の確認
            console.log(`word：${word}`);
            // S（問題の文字列）に前方一致するかbooleanで返す
            //* 開始位置は第2引数
            const isWords = S_args.startsWith(word, stringNum);
            console.log(`isWords：${isWords}`);
            //* trueで値を返す
            return isWords;
        });
        
        console.log(`search_Words：${search_Words}`);

        if(search_Words) {
            stringNum += search_Words.length;
            console.log(`stringNumの文字数：${stringNum}`)
        } else {
            break;
        }
    }
    
    //* 文字数一致の確認
    if(stringNum === S_args.length) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

//* 文字列反転処理
function reverseString(str) {
    console.log(`初期：${str}`);
    const str_split = str.split("");
    console.log(`文字列分割：${str_split}`);
    const str_reverse = str_split.reverse();
    console.log(`並び替え（反転）：${str_reverse}`);
    const str_join = str_reverse.join("");
    console.log(`結合：${str_join}`);
    console.log(`----------------------------`);
    return str_join;
    // return str.split("").reverse().join("");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/9_ABC049C.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}