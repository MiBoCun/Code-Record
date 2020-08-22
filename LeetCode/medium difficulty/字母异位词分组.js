let ary = ["eat", "tea", "tan", "ate", "nat", "bat"]

var groupAnagrams = function (strs) {
    let hash = new Map()
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split('').sort().join('')
        let temp = hash.get(str) || []
        temp.push(strs[i])
        hash.set(str, temp)
        /*if (hash.has(str)) {
            let temp = hash.get(str)
            temp.push(strs[i])
            hash.set(str, temp)
        } else {
            hash.set(str, [strs[i]])
        }*/

    }

    return [...hash.values()]
};

console.log(groupAnagrams(ary))


