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

    for(let yoko = 0; yoko < (1 << h); yoko++) {
        for(let tate = 0; tate < (1 << w); tate++) {
            let black = 0;
            for(let i =0; i < h; i++) {
                for(let j =0; j < w; j++) {
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
} catch (error) {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
}