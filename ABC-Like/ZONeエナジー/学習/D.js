// TODO
//*   ZONeエナジー D - 宇宙人からのメッセージ

function main(input) {
    'use strict';
    let s = input.trim().split('');
    let str = "";
    let isReverse = false;

    for(let i = 0; i < s.length; i++) {
        // console.log(s[i]);
        if(s[i] == "R") {
            //* 反転フラグを切り替える
            isReverse = !isReverse;
        } else {
            if(isReverse) {
                //* 反転している場合
                //* 先頭へ処理を行う
                str = s[i] + str;
            } else {
                //* 反転していない場合
                //* 問題文通り、末尾に処理を行う
                str += s[i];
            }
        } 
        // console.log(str);
        // console.log('---------');
    }
    // console.log(isReverse);

    //* 反転フラグの処理
    if(isReverse) str = str.split("").reverse();

    // console.log(str.join(""));

    //* --------------------
    let ans = []
    for(let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        //* ansが1文字以上ある、かつ最後の文字がstr[i]と一致した場合
        if(ans.length && ans[ans.length-1] === str[i]) {
            ans.pop();
        } else {
            ans.push(str[i]);
        }
        // console.log(ans);
        // console.log('-------------------');
    }
    console.log(ans.join(""))   
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/D.txt', 'utf8'));
