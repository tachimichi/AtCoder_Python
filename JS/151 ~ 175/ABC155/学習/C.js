// TODO
//*   ABC 155 C - Poll
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let str = [];
    for(let i = 1; i <= n; i++) 
        str.push(input[i].trim());
    
    // console.log(str);
    //* ------------------------------------
    let m = new Map();
    let max = 0;
    let ans = [];

    for(let i = 0; i < str.length; i++) {
        if(m.has(str[i])) {
            //* 例：Map.get(key)で、keyとセットにしているvalueが取得できる
            //* 
            m.set(str[i], m.get(str[i])+1);
        } else {
            //* Map.set(key, value)：keyとvalueを追加できる
            //* 例：Map.get(key)で、keyとセットにしているvalueが取得できる
            m.set(str[i], 1);
        }
        max = Math.max(m.get(str[i]), max);
    }

    //* カウントした結果をもとに、最大の文字列を取得する
    m.forEach(function(value, key) {
        // console.log(key, value);
        if(value == max) ans.push(key);
    });
    //* 辞書順ソート
    ans.sort();
    //* 表示
    for(let i = 0; i < ans.length; i++) 
        console.log(ans[i]);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));