// TODO
//*   ABC 199 C - IPFL

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0],10);
    let pre = input[1].slice(0, n); //* 前半
    let post = input[1].slice(n); //* 後半
    const q = parseInt(input[2],10);

    let t = [];
    let a = [];
    let b = [];
    for(let i = 3; i < 3+q; i++) {
        const [x, y, z] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        t.push(x);
        a.push(y);
        b.push(z);
    }

    console.log(pre);
    console.log(post);
    console.log(pre+post);
    console.log('-------------');
    console.log(t);
    
    //* ------------------------------------
    //? 注意：T=2の処理
    //? 文字列を前半後半に分割して保存しておく(preとpostをswapするのみ)
    //? 
    //? 
    
    for(let i = 0; i < q; i++) {
        if(t[i] == 1) {
            a[i]--;
            b[i]--;
            
            //* b[i]<nなら、どちらも前半のスワップ
            if(b[i] < n) {
                [pre[a[i]], pre[b[i]]] = [pre[b[i]], pre[a[i]]];
            
            //* n<=a[i]の場合、どちらも後半のスワップ
            } else if(n < a[i]) { 
                [post[a[i] - n], post[b[i] - n]] = [post[b[i] - n], post[a[i] - n]];

            //* 上記以外、前半と後半のスワップ
            } else {
                // let prepost = pre.concat(post).trim();
                // [prepost[a[i]], prepost[b[i]]] = [prepost[b[i]], prepost[a[i]]];

                // pre = prepost.slice(0, n);
                // post = prepost.slice(n);
                [pre[a[i]], post[b[i] - n]] = [post[b[i] - n], pre[a[i]]];
            }
        } else {
            console.log(typeof pre);
            console.log(pre);
            console.log(typeof post);
            console.log(post);
            console.log(post[0]);
            [pre, post] = [post, pre];
        }
        console.log(pre);
        console.log(post);
    }
    console.log(pre+post);
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