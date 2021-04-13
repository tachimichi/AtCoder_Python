// TODO
//*   ABC 162 C - Sum of gcd of Tuples (Easy) 
// 関数mainに標準入力をinputとして受け取る
(function() {
    'use strict';
    //* --------------------
    console.log(gcd(10, 25));
})();

//* 2つの数字a, bの最大公約数を求める
function gcd(a, b) {
    if (b === 0) return a;
    console.log(a, b);
    console.log('---------------');
    return gcd(b, a % b)
}