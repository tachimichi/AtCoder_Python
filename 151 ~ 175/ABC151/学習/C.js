// TODO
//*   ABC 151 C - Welcome to AtCoder
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let t = [];
    let s = [];
    for(let i = 1; i <= m; i++) {
        let [a, b] = input[i].trim().split(' ');
        t.push(parseInt(a, 10));
        s.push(b);
    }

    //* -------------------------------
    let AC = new Array(100000).fill(0);
    let WA = new Array(100000).fill(0);
    for(let i = 0; i < t.length; i++) {
        //* 既にt[i]番目のACがtrueだった場合、後操作なし
        if(AC[t[i]] == 1) continue;
        //* ---------------------------
        if(s[i] == 'AC') {
            AC[t[i]] = 1; //* AC[t[i]]とは、問題番号に伴ったACのi番目が選択される
        } else {
            WA[t[i]]++; //* WA[t[i]]も、問題番号に沿ったWAがカウントされる
        }
    }

    let countAC = 0;
    let countWA = 0;
    for(let i = 0; i < AC.length; i++) {
        if(AC[i] > 0) countAC += 1;
        if(AC[i] > 0 && WA[i] > 0) countWA += WA[i];
    }
    console.log(countAC, countWA);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));