// TODO
//*   ABC 173 B - Judge Status Summary

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let s = [];
    for(let i = 1; i <= n; i++) {
        s.push(input[i].trim());
    }
    // console.log(s);
    //* -------------------------------------
    let ac =0;
    let wa =0;
    let tle =0;
    let re =0;
    //* --------------------------------------
    for(let i = 0; i < n; i++) {
        if(s[i] == 'AC') {
            ac++;
        } else if(s[i] == 'WA') {
            wa++;
        } else if(s[i] == 'TLE') {
            tle++;
        } else {
            re++;
        }
    }
    console.log(`AC x ${ac}`);
    console.log(`WA x ${wa}`);
    console.log(`TLE x ${tle}`);
    console.log(`RE x ${re}`);
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