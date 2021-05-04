

function main(input) {
    input = input.trim().split('\n');
    let [n, k] = input[0].split(' ').map(n => parseInt(n, 10));
    //* ------------------------------------
    let t = [];
    for(let i = 1; i <= n; i++) {
        t.push(input[i].split(' ').map(n => parseInt(n, 10)));
    }
    console.log(t);
    console.log(t[1]);
    //* -------------------------------------
    
    function permutation(nums, k) {
        let ans = [];
        if (nums.length < k) {
            return [];
        }
        if (k === 1) {
            for (let i = 0; i < nums.length; i++) {
            ans[i] = [nums[i]];
            }
        } else {
            for (let i = 0; i < nums.length; i++) {
                let parts = nums.slice(0);
                parts.splice(i, 1)[0];
                let row = permutation(parts, k - 1);
                for (let j = 0; j < row.length; j++) {
                    ans.push([nums[i]].concat(row[j]));
                }
            }
        }
        return ans;
    }


    let tmp = [];
    
    for (let i = 2; i <= n; i++) {
        tmp.push(i); 
    }

    let p = permutation(tmp, n-1);
    let ans = 0;

    for (let i = 0; i < p.length; i++) {
        p[i].unshift(1);
        p[i].push(1);
        let sum = 0;

        for (let j = 0; j < p[i].length-1; j++) {
            sum += t[p[i][j]-1][p[i][j+1]-1];
        }
        if (sum == k) ans++;
    }

    console.log(ans);

}
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));