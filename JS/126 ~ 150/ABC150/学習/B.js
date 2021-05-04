// TODO
//*   ABC 150 B - Count ABC

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    //* ABCでsplitする方法---------------------------------
    // const word = input.split('ABC');
    // console.log(word);
    // console.log(word.length -1);

    //* 王道-------------------------------------------------
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    const S = input[1].split('');
    const [a, b, c] = ["A", "B", "C"];
    //* -----------------------------------------------------

    let count = 0;

    for(let i = 0; i < S.length; i++) {
        if(a === S[i] && b === S[i+1] && c === S[i+2]) {
            count++;
        }
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));