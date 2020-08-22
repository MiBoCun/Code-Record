<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

</body>
<script>
    var rotate = function(nums, k) {
        while(k--) {
            nums.unshift(nums.pop());
        }

    };
    let ary=[1,2,3,4,5,6,7],k=3;
    console.log(rotate(ary,k))
</script>
</html>