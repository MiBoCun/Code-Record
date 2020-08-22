

     function isValid() {
         let strValue=document.getElementById('str').value;
        var map = {
            "(": ")",
            "[": "]",
            "{": "}"
        }
        var leftArr = []
        for (var ch of strValue){
            if (ch in map) {
                leftArr.push(ch); //为左括号时，顺序保存
            }
            else { //为右括号时，与数组末位匹配
                if(ch != map[leftArr.pop()])
                      {return false;}
            }
        }
        return !leftArr.length //防止全部为左括号
    };


    /*function isValid() {
        let strValue=document.getElementById('str').value;
           if((strValue.length)%2==1){
               return alert("不符合");
           }
           while(strValue.length){
               let temp=strValue;
               strValue=strValue.replace("()","");
               strValue=strValue.replace("{}","");
               strValue=strValue.replace("[]","");
                   if(strValue==temp){
                       return alert("不符合，无效括号");
                   }
               return  alert("符合，有效括号");
           }




    }*/
