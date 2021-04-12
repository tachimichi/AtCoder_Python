// TODO
//*   ABC 171 B - Mix Juice

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k] = input[0].split(' ').map(n => parseInt(n, 10));
    const p = input[1].split(' ').map(n => parseInt(n, 10)); 
    //* -----------------------------
    const min = p.sort((a,b) => a-b);
    // console.log(min);

    let ans = 0;
    for(let i = 0; i < k; i++) {
        ans += min[i];
    }
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}