// TODO
//*   ABC 187 C - 1-SAT

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const input_array = input.trim().split('\n');
    //* 配列の最初の要素を取り除く(⇒shift)
    const n = input_array.shift();
    //* 重複した値は省く(⇒set)
    const unique = new Set(input_array);

    console.log(input_array);
    console.log(n);
    console.log(unique);

    let str1 = new Set();
    let str2 = new Set();

    //* 文字列の種類分け処理
    unique.forEach((element) => {
        //* !マークが無い文字列の場合
        if(!element.startsWith('!')) {
            str1.add(element);
        } else {
            //* !マークがある場合
            //! string.slice(n)⇒n番目から切り出して新しいstringとする
            str2.add(element.slice(1));
        }
    });

    let result = 'satisfiable';

    //* 同じ値があるかどうか判定処理
    str1.forEach((str) => {
        if(str2.has(str)) {
            result = str;
        }
    });

    console.log(result);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// main(require('fs').readFileSync('/dev/stdin', 'utf8'));
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));