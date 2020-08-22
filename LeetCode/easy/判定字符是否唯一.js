
   let str="adiseha"
    var isUnique = function(astr) {
        let  map=new Map()
             map.set(astr[0],0)
        let  i=1,isUnique=true;
        if(astr==""){
            return true
        }
        while(i<astr.length){
            if(map.get(astr[i])!=undefined){
                isUnique=false;
                break;

            }else{
                map.set(astr[i],i)
                if(i==astr.length-1){
                    return true
                }
                i++
            }
        }
        return  isUnique
    };
   console.log(isUnique(str))
