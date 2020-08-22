

/*function twoSum(nums,target) {

        const hashNums=[];
        const length=nums.length;
        for(let i=0;i<length;i++){
            let difer=target-nums[i];
            let diferIndex=hashNums.indexOf(difer)
            if(diferIndex>-1){
                console.log(i,diferIndex)
                return [diferIndex,i]
            }else{
                hashNums[i]=nums[i]
            }

        }
}*/
//双指针
 /*   function twoSum(nums,target) {
        let l=0;
        let r=nums.length-1;
        while (l<r){
            let sum=nums[l]+nums[r];
            if(sum==target){
                return[l,r]
            }else if(sum>target){
                r--;
            }else{
                l++;
            }
        }

    }*/

var twoSum = function(nums, target) {
    let res = {}
    for (let i = 0; i < nums.length; i++) {
        // 每个人报出自己想要配对的人
        let dif=target-nums[i]
        if (res[dif] !== undefined) { // 如果有人被登记过
            return [res[dif],i ] // 就是他
        } else {  // 否则
            res[nums[i]] = i
        }
    }
}

/*var twoSum = function(nums, target) {
    let len=nums.length
    for(let i=0;i<len;i++){
        let diff=target-nums[i]
        let ind=nums.indexOf(diff)
        if(ind>-1&&ind!=i){
            return [i,nums.indexOf(diff)]
        }
    }

};*/
let ary=[3,2,4]//升序数组
let tar=6;
console.log(twoSum(ary,tar))
