
  let ary = [3,6,1,7,14];
  var canMakeArithmeticProgression = function(arr) {
      arr.sort((a,b)=>{
          return a-b;
      })
      let flag=arr[1]-arr[0]
       for(let i=1;i<arr.length;i++){
              if(flag!=arr[i]-arr[i-1]){
                  return false
              }
       }
       return  true
  };
  console.log(canMakeArithmeticProgression(ary))
