// TODO
//*   第二回日本最強プログラマー学生選手権 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    // ----------------------
    //? 全ての全てのx, yに対して、全探索はTLEとなる
    //? 答えをansとして固定して、「gcd=cとなる(x,y)の組は存在するか」
    //? 最大公約数cは、xとyの倍数である必要がある
    //? つまり、区間[a,b]に２つ以上のcの倍数があること
    //? (1以上b以下のcの倍数の数) = b/c
    //? (1以上a-1以下のcの倍数の数) = a-1/c
    //? 
    //? もしくは、2個以上あるかどうか確認
    //? [a/c] < [b/c]

    let ans = 1;
    for(let i = 2; i < b; i++) {
        let x = Math.ceil(a / i);
        let y = Math.floor(b / i);
        if(y - x >= 1) ans = i;
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('/dev/stdin', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}