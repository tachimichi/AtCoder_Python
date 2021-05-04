// TODO
//*   ABC 147 B - Palindrome-philia

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    let str = input.trim().split('');
    // console.log(str);
    
    
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] != str[str.length - i-1]) count++;
        // console.log(str[i]);
        // console.log(str[str.length - i-1]);
    }
    console.log(count/2);
    
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));