// TODO
//*   ABC 157 C - Guess The Number
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].split(' ').map(n => parseInt(n, 10));
    //* -------------------------------
    let s = [];
    let c = [];
    for(let i = 1; i <= m; i++) {
        let [a, b] = input[i].split(' ').map(n => parseInt(n, 10));
        s.push(a);
        c.push(b);
    }
    // console.log(s);
    // console.log(c);
    //* ---------------------------------
    //* 計算量はO(10^N M)
    let ans = -1;
    for(let i = 0; i < 1000; i++) {
        // 文字列にして桁数チェック
        let t = i.toString().split('');
        if(t.length != n) continue;

        t = t.map(n => parseInt(n, 10));
        
        //* c[j]番目の数字と、s[j]で指定されているtの桁が一致するか
        let ok = true;
        for(let j = 0; j < m; j++) {
            if(c[j] != t[s[j]-1]) ok = false;
        }

        if(ok) return console.log(i);
    }
    console.log(ans);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}