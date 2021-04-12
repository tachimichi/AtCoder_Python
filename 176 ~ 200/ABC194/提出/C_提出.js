// TODO
//*   ABC 194 C	Squared Error

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const args = input.trim().split('\n');
    const n = parseInt(args[0], 10);
    const a = args[1].split(' ');
    const nums = a.map(n => parseInt(n, 10));

    const MaxA = 200;
    
    //* 配列(abs(200)個 + 1)の作成
    var arr = [];
    for (var i=0; i < MaxA * 2 + 1; i++) {
        arr[i] = 0;
    }
    
    let sum = 0;
    
    //* Aの全組み合わせ(-200<=A<=200)
    //* 400通り（⇒16万で10^5通り）
    
    //* iのループ
    for(let i = 0; i < n; i++) {
        //* 
        for(let j = -MaxA; j <= MaxA; j++) {
            let c = arr[MaxA + j];
            let x = nums[i] - j;
            let keisan = x * x * c;
            sum += x * x * c;
        }
        arr[MaxA + nums[i]]++;
    }
    console.log(sum);
    
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
