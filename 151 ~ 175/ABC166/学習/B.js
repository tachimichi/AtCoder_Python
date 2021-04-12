// TODO
//*   ABC 166 B - Trick or Treat

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k] = input[0].split(' ').map(n => parseInt(n, 10));
    //* -------------------------------
    //? i行目の配列ごとにmapの中で、pushを行うと
    //? aの中身が、1つの配列で管理できる
    let a = [];
    for(let i = 2; i < input.length; i += 2) {
        input[i].split(' ').map(n => a.push(parseInt(n, 10)));
    }
    console.log(a);
    //* -------------------------------
    let d = Array(n).fill(0);
    console.log(d);
    for(let i = 0; i < a.length; i++) {
        // a[i]で該当するn番目のスヌケを、d=1としてbit風に色付けする
        d[a[i]-1] = 1;
        console.log(d);
    }

    //* 0の箇所をカウントする
    let count = 0;
    for(let i = 0; i < d.length; i++) {
        if(d[i] === 0) count++;
    }
    console.log(count);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}