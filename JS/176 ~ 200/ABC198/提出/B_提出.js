// TODO
//*   ABC 198 B - Palindrome with leading zeros

function main(input) {
    //* 変数の初期化
    N = input.trim();
    //* ---------------
    // console.log(N);
    //* 条件：Nは最大10桁なので、i<10とする
    let i = 0
    while(i < 10) {
        //* 文字列Nが分割して反転しても、Nと同じなら
        if(N == N.split('').reverse().join('')) return console.log('Yes');

        //* 次のループ処理のためのステップ式
        N = '0' + N;
        i += 1;
        // console.log(N);
    }
    console.log('No')
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}