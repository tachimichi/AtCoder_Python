// TODO
//*   ABC 177 B - Substring

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [s, t] = input.trim().split('\n');
    //* -----------------
    let ans = t.length;
    //* ---------------------
    //* sの何文字目から調べるかを全探索
    for(let start = 0; start <= s.length - t.length; start++) {
        let diff = 0;
        //* 文字列tのi番目と、s[ループn回目+i番目]が一致するか確認
        for(let i = 0; i < t.length; i++) {
            if(t[i] != s[start + i]) diff++;
        }
        ans = Math.min(ans, diff);
    }
    console.log(ans);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}