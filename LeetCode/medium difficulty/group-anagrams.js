/*给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

    输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
    [
        ["ate","eat","tea"],
        ["nat","tan"],
        ["bat"]
    ]*/

//49. 字母异位词分组
var groupAnagrams = function (strs) {
    let hash = new Map()
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split('').sort().join('')
        let temp = hash.get(str) || []
        temp.push(strs[i])
        hash.set(str, temp)

    }

    return [...hash.values()]
};





