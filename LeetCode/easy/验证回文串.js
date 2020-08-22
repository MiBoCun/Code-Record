
    let str="aww"
    /*var isPalindrome = function(s) {
        //只考虑字母、数字，忽略大小写。
        //1:处理字符串，过滤特殊字符，转换大写或者小写。
        //2:双指针:左右对比，只要有一个不相等，返回false
        //3:边界值：空字符或者一个字符,true
        if(s.length<=1){
            return true
        }
        let str=s.replace(/\W|_/g,'');
            str=str.toLocaleLowerCase()
        let left=0;
        let right=str.length-1;
        while(left<right){
            if(str[left]!=str[right]){
                return false
            }
            left++
            right--
        }
    };
    */

    var isPalindrome = function(s) {
        let str=s.replace(/\W|_/g,"").toLowerCase().split('')
        return str.join()===str.reverse().join()
    };
   console.log(isPalindrome(str))

