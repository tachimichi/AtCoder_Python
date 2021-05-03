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
    //* ここまでは入力
    console.log([n, M]);
    console.log(ab);
    console.log(k);
    console.log(cd);
    
    let answer = 0;
    const k2 = 2 ** k;
    console.log(k2);
    console.log(`-------------------------------------`);
    
    //* 全探索(2^k)⇒k人がcかdに置く
    for(let i = 0; i < k2; i++) {
        // 皿の作成(中身は全て0)
        const dish = Array(n + 1).fill(0);
        //* 
        for(let j = 0; j < k; j++) {
            console.log((i >> j));
            //* i(2進数)をjだけずらし、その値の1の位が1or0か判定する
            //* 1ならcに、0ならdに入れる
            if((i >> j) & 1) {
                console.log('c');
                dish[cd[j][0]] += 1;
            } else { 
                console.log('d');
                dish[cd[j][1]] += 1;
            }
            console.log(dish);
            console.log(`-------------------------------------`);
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
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
