<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>旋转数组最小数字</title>
</head>
<body>

</body>
<script>

    /*var minArray = function(numbers) {
        let l=0;r=numbers.length-1
        while (l<r){
            let m=Math.floor((l+r)/2)
            if(numbers[m]>numbers[r]){
                l=m+1
            }else if(numbers[m]<numbers[r]){
                 r=m
            }else{
                j-=1
            }
        }
        return numbers[r]
  };*/
    let  num=[1,3,5]
  var minArray = function(numbers) {
      let len = numbers.length-1;
      let min = numbers[len];
      for(let i=len-1;i>=0;i--){
         if(numbers[i]>min){
             break
         }else(
             min=numbers[i]
         )
      }
      return value;
  };
  console.log(minArray(num))
</script>
</html>