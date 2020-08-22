
   let num= [6,5,4,8];
    //升序之后，通过indexOf
     var smallerNumbersThanCurrent = function(nums) {
       let num = []
       let number = [].concat(nums)//深拷贝
       let numss = nums.sort((a,b) => {return a-b}) //升序之后
       number.forEach(item => {
           num.push(numss.indexOf(item))
       })
       return num
   };
    /* var smallerNumbersThanCurrent = function(nums) {
            let ary=[]
            for(let i=0;i<nums.length;i++){
                  let cur=nums[i];
                  let court=0
                for(let i=0;i<nums.length;i++){
                    if(cur>nums[i]){
                      court++
                    }
                }
                ary.push(court)
            }
         return ary
    };*/
   // smallerNumbersThanCurrent(num)


   let rot=[3,9,20,null,null,15,7]

    function maxDepth(root) {
       if (!root) return 0;
       return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
   };
  // console.log(maxDepth(rot))

  let str='  the sky is blue  '
  let strTrim=str.split(' ');

   console.log(strTrim.filter(item=>{if(item!=""){return item}}))

