// TODO
//*   ABC 170 C - Forbidden List

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    input = input.trim().split('\n');
    const [x, n] = input[0].split(' ').map(n => parseInt(n, 10));
    //* --------------------------------
    //* n = 0の場合分け
    if(n === 0) {
        return console.log(x);
    }
    //* --------------------------------
    let p = input[1].split(' ').map(n => parseInt(n, 10));
    let min = 101; //* 考え得る最大の値
    let ans = -1;
    // console.log(`p:`, p);
    //* -------------------------------
    for(let i = 0; i <= 101; i++) {
        // console.log(`i:`, i);
        //* pに含まれる場合、スキップ
        if(p.includes(i)) continue;
        
        //* 含まれない場合の処理
        const distance = Math.abs(x - i);
        // console.log(`i:`, i, `d:`, distance);
        //* もしdistanceが大きくなりすぎた場合
        if(distance >= min) {
            break;
        } else {
            min = distance; //* minが少しずつ小さくなっていく
            ans = i; //* distanceが小さくなった時に、iを値に入れていく
        }
        // console.log(`ans:`, ans);
        // console.log('-------------------');
    }
    console.log(ans);
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