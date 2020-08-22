
    let candie= [4,2,1,1,2,5],extraCandy= 3
    var kidsWithCandies = function(candies,extraCandies) {
               let maxCandy=0;
               /*for(let i=0;i<candies.length;i++){
                     if(candies[i]>maxCandy){
                         maxCandy=candies[i]
                     }

               }*/
              for(let val of candies){
                 maxCandy=Math.max(maxCandy,val)
              }
              for(let k=0;k<candies.length;k++){
                  candies[k]=candies[k]+extraCandies>=maxCandy;

              }
              console.log(candies)


    };
    kidsWithCandies(candie,extraCandy)
