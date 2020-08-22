<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <h4>&: 按二进制位进行 与运算，相同位同时为 1 时结果为 1，否则为 0</h4>
<h4>| : 按二进制位进行 或运算，相同位有一个为 1 时结果为 1，否则为 0</h4>
<h4>^ : 按二进制位进行 异或运算，相同位相同时结果为 0，否则为 1</h4>
<h4>>> : 右移运算是将一个二进制位的操作数按指定移动的位数向右移动，移出位被丢弃，左边移出的空位或者一律补 0</h4>
<h4><< : 左移运算是将一个二进制位的操作数按指定移动的位数向左移位，移出位被丢弃，右边的空位一律补 0</h4>
</body>
<script>
   /*let x = 1, y = 4
    var hammingDistance = function(x, y) {
        let ans = 0
        //(0 0 0 1),(0 1 0 0)
        while (x !== 0 || y !== 0) {
            let xa=x&1,ya=y&1;
            if (xa !== ya) {
                ans++
            }
            x >>= 1
            y >>= 1
        }
        return ans
    };*/

   // console.log(hammingDistance(x,y))

      let res=''
  function parseTwo(num){
        let t=(num%2).toString();
            res+=t
        if(num==1){
            return
        }else{
            num=parseTwo(Math.floor(num/2))
        }
        console.log(res.split("").reverse().join(''))

  }
  parseTwo(100)

</script>
</html>