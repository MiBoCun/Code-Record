
    var replaceSpace = function(s) {
        let res=""
        for(let i=0;i<s.length;i++){
            s[i]==" "?res+="%20":res+=s[i]
        }
        return res
    };
    let str=" We are happy."
  console.log(replaceSpace(str))
