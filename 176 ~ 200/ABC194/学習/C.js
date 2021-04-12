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

    console.log(`-----------------------------------`);
    console.log(`全体数n:${n}`);
    console.log(`aの中身:${a}`);
    console.log(`aの整数化nums:${nums}`);
    
    //* 配列(abs(200)個 + 1)の作成
    var arr = [];
    for (var i=0; i < MaxA * 2 + 1; i++) {
        arr[i] = 0;
    }
    console.log(`空配列:${arr}`);
    console.log(arr.length);
    console.log(`-----------------------------------`);
    
    let sum = 0;
    
    //* Aの全組み合わせ(-200<=A<=200)
    //* 400通り（⇒16万で10^5通り）
    
    //* iのループ
    for(let i = 0; i < n; i++) {
        console.log(`-----------------------------------`);
        //* 
        for(let j = -MaxA; j <= MaxA; j++) {
            console.log(`[i,j]の確認:[${i},${j}]`);
            let c = arr[MaxA + j];
            console.log(`cの確認:${c}`);
            let x = nums[i] - j;
            console.log(`xの確認:${x}`);
            let keisan = x * x * c;
            console.log(`keisanの確認:${keisan}`);
            sum += x * x * c;
            console.log(`sumの確認:${sum}`);
        }
        console.log(`arr[MaxA + nums[i]]の確認:${arr[MaxA + nums[i]]}`);
        arr[MaxA + nums[i]]++;
        console.log(`arr[MaxA + nums[i]]の確認:${arr[MaxA + nums[i]]}`);
        console.log(`${arr[MaxA + nums[i]]}`);
        console.log(`-----------------------------------`);
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
