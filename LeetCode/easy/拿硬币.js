let ary = [2, 3, 10];
var minCount = function (coins) {
    let count = 0;
    for (let i = 0; i < coins.length; i++) {
        let cur = coins[i] % 2
        cur == 0 ? count += coins[i] / 2 : count += (coins[i] + 1) / 2
    }
    return count
};
console.log(minCount(ary))
