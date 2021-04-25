// TODO
//*   ABC 198 C - Compass Walking

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0],10);
    let str = input[1].trim();
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

    // console.log(str);
    // console.log('-------------');
    //* ------------------------------------
    for(let i = 0; i < t.length; i++) {
        if(t[i] == 2) {
            let str1 = str.slice(0, n);
            let str2 = str.slice(n);
            // console.log(str1);
            // console.log(str2);
            str = str2.concat(str1);
            // console.log(str);
        } else {
            str = replaceArrayElements(str.split(''), a[i]-1, b[i]-1);
            str = str.join('');
        }
    }

    console.log(str);
}

function replaceArrayElements(array, targetId, sourceId) {
    return array.reduce((resultArray, element, id, originalArray) => [
        ...resultArray,
        id === targetId ? originalArray[sourceId] :
        id === sourceId ? originalArray[targetId] :
        element
    ], []);
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