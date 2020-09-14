/*实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：

输入: s = "leetcode"
输出: false

示例 2：

输入: s = "abc"
输出: true
*/

//判定字符是否唯一
let str = "axsa"
var isUnique = function (s) {
    let map = new Map()
    if (s == "") {
        return true
    }
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            return false
        } else {
            map.set(s[i], i)
        }
    }
    return true

};




