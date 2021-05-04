// TODO
//*   ABC 128 B - Guidebook

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    //* ------------------------------------------------------
    //* 配列とオブジェクトを作成する
    let list = [];
    for(let i = 1; i <= n; i++) {
        let city = input[i].split(' ')[0];
        let point = parseInt(input[i].split(' ')[1], 10);
        // objの初期設定
        let obj = {
            no: i,
            city: city,
            point: point,
        };
        // pushして、空配列に格納する
        list.push(obj);
    }
    //* ------------------------------------------------------
    list.sort(function(a, b) {
        //* 名前順にソート（辞書順）
        if (a.city < b.city) return -1
        if (a.city > b.city) return 1
        //* ポイントを降順
        if (a.point < b.point) return 1
        if (a.point > b.point) return -1
    })
    //* -----------------------------------------------------
    list.forEach(n => {
        console.log(n.no);
    })
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}