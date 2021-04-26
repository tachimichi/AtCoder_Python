// TODO
//*   010 - Score Sum Queries

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    //* 入力
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let c = [];
    let p = [];
    for(let i = 1; i <= n; i++) {
        const [x, y] = input[i].trim().split(' ').map(x => parseInt(x, 10));
        c.push(x);
        p.push(y);
    }
    const q = parseInt(input[n+1], 10);
    let l = [];
    let r = [];
    for(let i = n+2; i < n+2+q; i++) {
        let [x, y] = input[i].trim().split(' ').map(x => parseInt(x, 10));
        l.push(x);
        r.push(y);
    }

    // console.log(l);
    //* -----------------------------------------------

    let sum1 = 0;
    let sum2 = 0;
    //* 累積和で差分を取るために0を初期にpushする
    let arr1 = [0];
    let arr2 = [0];
    //* 1組・2組の累積和を取る
    for(let i = 0; i < n; i++) {
        if(c[i] == 1) sum1 += p[i];
        if(c[i] == 2) sum2 += p[i];
        arr1.push(sum1);
        arr2.push(sum2);
    }

    console.log(arr1);
    console.log(arr2);

    //* R番目からL番目までの合計を取得する
    //* sum[r[i]] - sum[L[i]-1]
    //? L[i]-1というのは、L番目を含めたいから
    for(let i = 0; i < q; i++) {
        let ans1 = arr1[r[i]] - arr1[l[i]-1];
        let ans2 = arr2[r[i]] - arr2[l[i]-1];
        console.log(ans1, ans2);
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/010.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}