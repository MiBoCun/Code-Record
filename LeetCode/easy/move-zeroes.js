let ary = [0, 1, 4, 0, 3];
moveZero(ary)

function moveZero(num) {
    let length = num.length
    let j = 0;
    for (let i = 0; i < length; i++) {
        if (num[i] != 0) {
            num[j++] = num[i]
        }
    }
    while (j < length) {
        num[j++] = 0
    }
    console.log(num);
    return num;
}

/*function  moveZero(num) {
    let length=num.length
    let j=0;
    for(let i=0;i<length;i++){

        if(num[i]!=0){
             num[j]=num[i];
             if(i!=j){
                 num[i]=0
             }
             j++;
        }

    }
    console.log(num);
    return num;
 }*/

