// TODO
//*   ABC 174 B - Distance

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, d] = input[0].split(' ').map(n => parseInt(n, 10));
    let a = [];
    for(let i = 1; i <=n; i++) {
        const [x, y] = input[i].split(' ').map(n => parseInt(n, 10));
        a.push([x, y]);
    }
    // console.log(a);
    //* ----------------------------------------
    let count = 0;
    for(let i = 0; i < n; i++) {
        let distance = Math.sqrt(Math.pow(a[i][0], 2) + Math.pow(a[i][1], 2));
        // console.log('---------------');
        // console.log(distance);
        if(distance <= d) count++;
    }
    console.log(count);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
} catch (error) {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
}