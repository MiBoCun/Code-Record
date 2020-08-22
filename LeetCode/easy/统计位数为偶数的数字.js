<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

</body>
<script>
   let nums = [12,345,2,6,7896]
    var findNumbers = function(nums) {
        let count=0;
        let arr=nums.filter(item=>(""+item).length%2===0)

    };
   console.log(findNumbers(nums))
</script>
</html>