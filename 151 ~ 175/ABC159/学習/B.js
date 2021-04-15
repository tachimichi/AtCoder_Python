// TODO
//*   ABC 159 B - String Palindrome

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const s = input.trim();
    const n = s.length;
    // ------------------------
    // console.log(s);
    // console.log(check(s));
    //* -----------------------
    if(check(s) && check(s.slice(0, Math.floor(s.length / 2))) && check(s.slice(Math.ceil(s.length / 2))) ) {
        return console.log('Yes');
    }
    console.log('No');
}

function reverseStr(s) {
    let rs = "";
    for (let i = 0, n = s.length; i < n; i++) {
        rs += s[n-i-1];
    }
    return rs;
}

function check(str) {
    return str === reverseStr(str);
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