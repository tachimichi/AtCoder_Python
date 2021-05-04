// TODO
//*   ABC 173 C - H and V

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [h, w, k] = input[0].split(' ').map(n => parseInt(n, 10));
    const n = [];
    for (let i = 1; i <= h; i++) {
        let t = input[i].split('');
        n.push(t);
    }
    //* -------------------------------
    //? 前提：h行目を塗るのか、w列目を塗るのか
    //? bit全探索：2^h+w通り。
    //? 制約：h, w <6(4096通り)

    let ans = 0;

    //* h行,w列を塗るか塗らないか2進数で判断
    for(let yoko = 0; yoko < (1 << h); yoko++) {
        for(let tate = 0; tate < (1 << w); tate++) {
            let black = 0;
            for(let i =0; i < h; i++) {
                for(let j =0; j < w; j++) {
                    //* 右シフト演算（桁を一つ減らす） & 1（Yesの判定箇所）
                    //* 論理積 ==0（塗らない所）&& '#'なら、黒としてカウント
                    if(((yoko >> i) & 1) == 0 
                        && ((tate >> j) & 1) == 0
                        && n[i][j] == '#' ) black++;
                }
            }
            if(black == k) ans++;
        }
    }
    console.log(ans);
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