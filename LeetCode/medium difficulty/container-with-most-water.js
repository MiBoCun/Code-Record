
    let height=[1,8,6,2,5,4,8,3,7]
    var maxArea = function(ary) {
        let i=0
        let j=ary.length-1
        let max=0
        while (i<j){
            let minH=ary[i] < ary[j] ?ary[i++] :ary[j--]
            let area=minH*(j-i+1)
            max=Math.max(max,area)

        }
        return max
    };
   console.log(maxArea(height))
    //枚举 时间复杂度：n^2
    /*var maxArea = function(height) {
        let max=0
        for (let i=0;i<height.length-1;i++){
            for (let j=i+1;j<height.length;j++){
               let area=(j-i)*Math.min(height[i],height[j])
                   max=Math.max(max,area)
            }
        }
        return max
    };*/

