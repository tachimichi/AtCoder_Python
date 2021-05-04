// TODO
//*   ABC 199 C - IPFL

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0],10);
    let str = input[1].trim().split('');
    const q = parseInt(input[2],10);

    let t = [];
    let a = [];
    let b = [];
    for(let i = 3; i < 3+q; i++) {
        const [x, y, z] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        t.push(x);
        a.push(y);
        b.push(z);
    }

    // console.log(t);
    // console.log(a);
    // console.log(b);
    // console.log('-------------');
    // console.log('-------------');
    //* ------------------------------------
    //? 注意：T=2の処理
    //? フラグを反転する
    //? T=1の時に処理を行う
    //? 

    let reverse = false;
    for(let i = 0; i < q; i++) {
        //* t[i]が1のとき(strのA文字目とB文字目を入れ替える)
        if(t[i] == 1) { 
            //* 前半後半が反転しているかどうかフラグ確認
            if(reverse) {
                let aIndex;
                let bIndex;
                //* n(半分)より大か小かでnを足すか引くか決まる
                //* 前提：既にstrが前後、反転しているため
                if(a[i] <= n) {
                    aIndex = a[i] + n;
                } else {
                    aIndex = a[i] - n;
                }
                if(b[i] <= n) {
                    bIndex = b[i] + n;
                } else {
                    bIndex = b[i] - n;
                }
                //* aとbが逆転していた場合、スワップ
                if(aIndex > bIndex) [aIndex, bIndex] = [bIndex, aIndex];
                //* a[i]とb[i]の入れ替え
                const aChar = str[aIndex -1];
                const bChar = str[bIndex -1];
                str[aIndex -1] = bChar;
                str[bIndex -1] = aChar;

            //* 反転していない場合
            } else {
                //* 一旦退避させてa[i]とb[i]を入れ替え
                const aChar = str[a[i] - 1];
                const bChar = str[b[i] - 1];
                str[a[i] - 1] = bChar;
                str[b[i] - 1] = aChar;
            }
        } else { //* T=2の処理(booleanを反転)
            reverse = !reverse;
        }
    }
    //* もし反転フラグがtrueのまま、残っていた場合
    if(reverse) {
        str = str.slice(n).concat(str.slice(0, n));
    }
    console.log(str.join(''));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));