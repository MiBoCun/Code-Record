

var climbStairs = function (n) {
    //滚动数组
    let ary = [0, 1, 2]
    for (let i = 3; i <= n; i++) {
        ary[i] = ary[i - 1] + ary[i - 2]
    }
    return ary[n]

};
console.log(climbStairs(4))

