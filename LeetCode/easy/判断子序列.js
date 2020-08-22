

  var isSubsequence = function(s, t) {
      let index=-1;
      for(let i=0;i<s.length;i++){
          index=t.indexOf(s[i],index+1);
          if(index>-1){
              continue
          }else{
              return false
          }
      }
      return true
  };
  let s = "axc", t = "hbagxc";
  console.log(isSubsequence(s,t))
