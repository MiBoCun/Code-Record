/*实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：

输入: s = "leetcode"
输出: false

示例 2：

输入: s = "abc"
输出: true
*/

//判定字符是否唯一
let str = "adiseha"
var isUnique = function (astr) {
    let map = new Map()
    map.set(astr[0], 0)
    let i = 1, isUnique = true;
    if (astr == "") {
        return true
    }
    while (i < astr.length) {
        if (map.get(astr[i]) != undefined) {
            isUnique = false;
            break;

        } else {
            map.set(astr[i], i)
            if (i == astr.length - 1) {
                return true
            }
            i++
        }
    }
    return isUnique
};
console.log(isUnique(str))
