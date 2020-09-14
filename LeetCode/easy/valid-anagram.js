/*给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
示例 1:

输入: s = "anagram", t = "nagaram"
输出: true


示例 2:

输入: s = "rat", t = "car"
输出: false*/


let s = "anagram", t = "nagaram";
var isAnagram = function (s, t) {
    let map = {}
    if (s.length != t.length) return false
    for (let i of s) {
        map[i] = ((map[i]) || 0) + 1
    }
    for (let i of t) {
        if (!map[i]) return false
        map[i]--
    }
    return true
};






