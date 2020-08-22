>
    var plusOne = function(digits) {
        let len=digits.length-1
        for(let i=len;i>=0;i--){
            if(digits[i]<9){
                digits[i]++
                return digits
            }
            digits[i]=0
        }
        if(digits[0]==0){
            digits.onshift(1)
        }
        return digits
    };
    let ary=[9,9,9,]
    console.log(plusOne(ary))
