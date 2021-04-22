// TODO
//*   ABC 155 B - Papers, Please

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    //* ----------------------------
    let even = [];
    for(let i = 0; i < n; i++) 
        if(a[i] % 2 === 0) even.push(a[i]);
    
    let ans = 'APPROVED'
    for(let i = 0; i < even.length; i++) {
        if(even[i] % 3 !== 0) {
            if(even[i] % 5 !== 0) return console.log('DENIED');
        }
    }
    console.log(ans);

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