

      @param {number[]} A
      @param {number[]} B
      @return {number}


    var findLength = function(A, B) {
        let res=0;
        for(let i=0;i<A.length;i++){
            for(let j=0;j<B.length;j++){
                if(A[i]==B[j]){
                    let comLen=1
                    while(A[i+1]==B[j+1]&&i<A.length&&j<B.length){
                        comLen++
                        res=Math.max(comLen,res)
                    }
                }
            }
        }
        return res;
    };
    let A=[1,2,3,2,1],B=[3,2,1,4,7];
    console.log(findLength(A,B))

