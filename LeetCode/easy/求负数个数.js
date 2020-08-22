<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

</body>
<script>
  let ary=[[4,3,2,-1]];
  var countNegatives = function(grid) {
      let m=grid.length;
      let n=grid[0].length;
      let num=0;
      for(let i=0;i<m;i++){
          for(let j=0;j<n;j++){
              if(grid[i][j]<0){
                  num+=(n-j)
                  break
              }
          }
      }
      return num;
  };
  console.log(countNegatives(ary))
</script>
</html>