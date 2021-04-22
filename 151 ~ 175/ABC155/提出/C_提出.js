// TODO
//*   ABC 155 C - Poll
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
        input = input.trim().split("\n");
        const n = parseInt(input[0]);
        //* 取得しつつ、辞書順にソートする
        const str = input.slice(1, n + 1).sort();
        
        let list = [];
        let streak = 0;
        let max = 0;
        
        for(let i=0; i < str.length; i++) {
            //* 連続して同じ単語なら
            if(str[i] === str[i + 1]) {
                streak++;
            } else {
                streak = 0;
            }
            
            //* 連続数を更新した場合
            if(streak > max) {
                max = streak;
                //* 単語リストを更新する
                list = [str[i]];
            } else if(streak === max) { //* 同率の場合
                //* 追加する
                list.push(str[i]);
            }
        }
        //* リストを改行区切りで表示
        console.log(list.join("\n"));
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