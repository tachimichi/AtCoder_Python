// TODO
//*   ABC 168 C - : (Colon)

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, h, m] = input.trim().split(' ').map(n => parseInt(n, 10));
    //* --------------------------------
    const a_kakudo = (h*60+m)*0.5;
    const b_kakudo = m*6;
    let kakudo = a_kakudo - b_kakudo;
    // console.log('aの角度', a_kakudo);
    // console.log('bの角度', b_kakudo);
    if(a_kakudo - b_kakudo > 180) {
        kakudo = Math.abs(360 - kakudo);
    } 
    // console.log('角度', kakudo);
    //* num * (2 * Math.PI) / 360 ⇒角度に変換
    const cos = Math.cos(kakudo * (2 * Math.PI) / 360);
    //* -------------------
    const hoge = a*a + b*b - 2*a*b*cos;
    const ans = Math.sqrt(hoge);
    // console.log(hoge);
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}