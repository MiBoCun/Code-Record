
/*给定一个非负整数数组和一个整数n，你需要将这个数组分成n个非空的连续子数组。设计一个算法使得这m个子数组各自和的最大值最小。

注意:
数组长度n满足以下条件:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
示例:

输入:
nums = [7,2,5,10,8]
m = 2

输出:
18

解释:
一共有四种方法将nums分割为2个子数组。
其中最好的方式是将其分为[7,2,5] 和 [10,8]，
因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
*/



    var splitArray = function(nums, m) {
        let left=0,right=0;
        for(var i=0;i<nums.length;i++){
            left=Math.max(left,nums[i]);
            right+=nums[i];
        }
        let check=(target,nums,m)=>{
            var cur=1,sum=0;
            for(var i=0;i<nums.length;i++){
                if(sum+nums[i]>target){
                    sum=nums[i];
                    cur++
                }else{
                    sum+=nums[i];
                }
            }
            return cur>m;
        }
        if(m==1)return right
        while(left<right){
            if(check(left,nums,m)){
                left++
            }else{
                return left
            }
        }
    };
    let ary=[2,5,15,9,1,2,12],m=3;
console.log(splitArray(ary,m))
</script>
