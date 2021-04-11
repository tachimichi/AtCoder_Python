// TODO
//*   ABC 198

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let n = input.trim().split('').map(n => parseInt(n, 10));
    // console.log(n);
    //* ---------------
    let n2 = reverse(n);
    // console.log(n2);
    if(n.toString() == n2.toString()) return console.log('Yes');
    //* -----------------
    for(let i = 0; i < n.length; i++) {
        n2.push(0);
        // console.log(n2);
        const str = reverse(n2);
        // console.log(str);
        if(str.toString() === n2.toString()) return console.log('Yes');
    }
    console.log('No');
}

function reverse(arr){
    if(toString.call(arr) !== '[object Array]') return null;
    if(arr.length === 0) return arr;
    var copy = arr.slice();
    return copy.reverse();
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
}