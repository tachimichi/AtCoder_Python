// TODO
//*   ABC 166 C - Peaks
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].split(' ').map(n => parseInt(n, 10));
    const h = input[1].split(' ').map(n => parseInt(n, 10));
    // -------------------------------
    let a = [];
    let b = [];
    for(let i = 2; i < input.length; i++) {
        const [t1, t2] = input[i].split(' ').map(n => parseInt(n, 10));
        a.push(t1);
        b.push(t2);
    }
    console.log(a, b);
    //* ------------------------------
    //* 他の山より大きい場合のみ、1とする（bit全探索風）
    let t = new Array(n).fill(1);
    console.log(t);
    for(let i = 0; i<m; i++) {
        //* 線でつながる箇所同士を比較する
        //* (小さい方or同値)を探して、0にする
        //? 残った要素が良い山として条件に当てはまる
        if(h[a[i]-1] >= h[b[i]-1]) t[b[i]-1] = 0;
        if(h[a[i]-1] <= h[b[i]-1]) t[a[i]-1] = 0;
    }
    console.log(t);

    let ans = 0;
    for(let i = 0; i<t.length;i++) {
        if(t[i] == 1) ans++;
    }
    console.log('ans', ans);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));