// TODO
//*   ABC 198 C - Compass Walking

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0],10);
    let str = input[1].trim().split(' ');
    const q = parseInt(input[2],10);

    let ary = [...Array(2 * n)].map((_, i) => i);

    let t = [];
    let a = [];
    let b = [];
    for(let i = 3; i < 3+q; i++) {
        const [x, y, z] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        t.push(x);
        a.push(y);
        b.push(z);
    }

    console.log(ary);
    // console.log('-------------');
    //* ------------------------------------
    let reverse = false;
    for(let i = 0; i < q; i++) {
        if(t === 1) {
            if(reverse) {
                if(a <= n) let aIndex = a + n;
                if(b <= n) let bIndex = b + n;
                if(aIndex > bIndex) [aIndex, bIndex] = [bIndex, aIndex];
                const aChar = str[aIndex -1];
                const bChar = str[bIndex -1];
                str[aIndex] = bChar;
                str[bIndex] = aChar;
            } else {
                const aChar = str[a - 1];
                const bChar = str[b - 1];
                str[a - 1] = bChar;
                str[b - 1] = aChar;
            }
        } else {
            reverse = !reverse;
        }
    }

    if(reverse) {
        str = str.slice(n).concat(str.slice(0, n));
    }
    console.log(str.join(' '));
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
