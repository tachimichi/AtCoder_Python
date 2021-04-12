// TODO
//*   ABC 198 B - Palindrome with leading zeros

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    //* 数字の分割
    let n = input.trim().split('').map(n => parseInt(n, 10));
    console.log(`n:`);
    console.log(n);
    //* ---------------
    //* 反転させる関数を使用する
    //? arr.reverse()だと、破壊的な性質のため、元の配列も変更される
    let n2 = reverse(n);
    console.log(`n2`);
    console.log(n2);
    console.log(`n:`);
    console.log(n);
    //* 元から回文かどうか判定する()
    //* toString無しだと、配列自体の比較となるため中身が一致してもダメ
    if(n.toString() == n2.toString()) return console.log('Yes');

    //* -----------------
    for(let i = 0; i < n.length; i++) {
        // 末尾に0を挿入
        n2.push(0);
        console.log(`n2+0`);
        console.log(n2);
        // 反転させる
        const str = reverse(n2);
        console.log(`str:`);
        console.log(str);
        // 末尾に0を足したものが回文か判定する
        if(str.toString() === n2.toString()) return console.log('Yes');
        console.log(`--------------------`);
    }
    console.log('No');
}

function reverse(arr){
    if(toString.call(arr) !== '[object Array]') return null;
    if(arr.length === 0) return arr;
    let copy = arr.slice();
    return copy.reverse();
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
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