// TODO
//*   ABC 172 C - Tsundoku

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m, k] = input[0].split(' ').map(n => parseInt(n, 10));
    let a = input[1].split(' ').map(n => parseInt(n, 10));
    let b = input[2].split(' ').map(n => parseInt(n, 10));
    //* -------------------------------------
    let t = 0;
    b.forEach(element => {
        t += element;
    });
    //* -------------------------------------
    let j = m;
    let ans = 0;

    for(let i = 0; i <= n; i++) {
        //* k分以内にtが収まるように、もしくはj(=m)冊読み切るか
        while(t>k && j>0) {
            j--;
            t -= b[j]; //* 最大量から引いていく
        }

        //* 時間オーバーの場合
        if(t>k) break; 
        //* 最大値を比較する
        ans = Math.max(ans, i+j);
        //* aの本を読み切った場合
        if(i == n) break;
        //* a[i]を読む時間を考慮する
        t += a[i];
    }
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
}