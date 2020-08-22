
    let s = "anagram", t = "nagaram";
    var isAnagram = function(s, t) {
        if(s.length!=t.length) return false
        const count={}
        for(let i of s){
            count[i]=(count[i]||0)+1
        }
        for(let i of t){
            if (!count[i]) return false
            count[i]--
        }
        return true
    };
    console.log(isAnagram(s,t))
