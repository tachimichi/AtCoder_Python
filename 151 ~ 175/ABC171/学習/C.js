// TODO
//*   ABC 171 C - One Quadrillion and One Dalmatians

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    input = input.trim().split('\n');
    let n = BigInt(input[0]);
    let s = 'zabcdefghijklmnopqrstuvwxyz';
    s = s.split('');
    // console.log(s);
    //* --------------------------------
    
    let ans = [];
    while (n > 0n) {
        //* もし偽なら、26を代入する
        let t = n % 26n || 26n;
        //* 26進数で割った余りを格納していく
        //* s[0 ~ 26]でアルファベットを表せる
        ans.unshift(s[t]);
        //* 本体-余り/26（⇒次の桁へ移行する）
        n = (n - t) / 26n;
    }
    console.log(ans.join(''));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}