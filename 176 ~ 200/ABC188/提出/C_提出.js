// TODO
//*   ABC 190 C - Bowls and Dishes

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const args = input.trim().split('\n');
    const [n, M] = args[0].split(' ').map(n => parseInt(n, 10));
    let ab = [];
    for(let i = 1; i <= M; i++) {
        ab.push(args[i].split(' ').map(n => parseInt(n, 10)));
    }
    const k = args[M + 1]; 
    let cd = [];
    for(let i = M + 2; i < args.length; i++) {
        cd.push(args[i].split(' ').map(n => parseInt(n, 10)));
    }
    
    let answer = 0;
    const k2 = 2 ** k;
    
    for(let i = 0; i < k2; i++) {
        // 皿の作成
        const dish = Array(n + 1).fill(0);

        for(let j = 0; j < k; j++) {
            if((i >> j) & 1) {
                dish[cd[j][0]] += 1;
            } else { 
                dish[cd[j][1]] += 1;
            }
        }

        let now = 0;
        for(let k = 0; k < M; k++) {
            if(dish[ab[k][0]] > 0 && dish[ab[k][1]] > 0) {
                now += 1;
            }
        }
        answer = Math.max(answer, now);
    }
    console.log(answer);
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
