<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>访问所有点的最小时间</title>
</head>
<body>

</body>
<script>
   let points = [[1,1],[3,4],[-1,0]];
    var minTimeToVisitAllPoints = function(points) {
        let t=0;
        let x=0,y=0
        for(let i=0;i<points.length;i++){
             x= points[i+1][0]-points[i][0]
             y= points[i+1][1]-points[i][1]
            if(x>=y){
                t+=x
            }
        }
        return t
    };
    console.log(minTimeToVisitAllPoints(points))

</script>
</html>