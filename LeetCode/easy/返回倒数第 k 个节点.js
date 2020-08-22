
    let  J = "aA", S = "aAAbbbb"
    var numJewelsInStones = function(J, S) {
        let jSplit=J.split('')
        let sSPlit=S.split('')
        return  sSPlit.filter(item=>{if (jSplit.indexOf(item)>-1){
            return item
        }});

    };
    console.log(numJewelsInStones(J,S))
