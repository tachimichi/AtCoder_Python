// TODO
//*   ABC 079 C - Train Ticket 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = input.trim();
    const [a, b, c ,d] = input.trim().split('').map(n => parseInt(n, 10));
    // console.log(n);
    // console.log(x);
    //* ----------------------------
    const kigou = {
        '1' : '+',
        '-1' : '-',
        'seven' : '=7',
    };
    // const seven = '=7';
    //* ----------------------------
    for(let i = -1; i<2; i+=2){
        for(let j = -1; j<2; j+=2){
            for(let k = -1; k<2; k+=2){
                if(a+ b*i + c*j +d*k == 7) {
                    return console.log([a, kigou[i], b, kigou[j], c, kigou[k], d, kigou.seven].join('')); 
                }
            }
        }    
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));