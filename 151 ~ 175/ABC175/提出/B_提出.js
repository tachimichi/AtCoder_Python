// TODO
//*   ABC 175 B - Making Triangle

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let L = input[1].split(' ').map(n => parseInt(n, 10));
    // console.log(L);
    //* ----------------
    //? 前提：三角形の成立条件
    //? a+b>c
    //? b+c>a
    //? c+a>b
    //* もしa<b<cが保証されるなら、a+b>cの判断だけでOK
    //TODO ソートする
    L = L.sort((a,b) => a-b);
    // console.log(L);

    let count = 0;
    for(let i = 0; i < n-2; i++) {
        for(let j = i+1; j < n-1; j++) {
            for(let k = j+1; k < n; k++) {
                //* 同じ数字は飛ばしたい
                if(L[i] == L[j] || L[j] == L[k]) continue;
                //* a+b>cで成立するか判断
                if(L[i] + L[j] > L[k]) count++;
            }
        }
    }
    console.log(count);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}