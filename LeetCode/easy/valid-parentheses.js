

    /*var isValid = function(s) {
        let map = {
            '{': '}',
            '(': ')',
            '[': ']'
        }
        let stack = []
        for(let i = 0;i < s.length;i++) {
            if(map[s[i]]) {
                stack.push(s[i])
            } else if(s[i] !== map[stack.pop()]){
                return false
            }
        }
        return stack.length === 0
    };*/
    let str="({}){}()"
   var isValid = function(s) {
       const stack = [];

       for (let i = 0 ; i < s.length ; i++) {
           let c = s.charAt(i);
           switch(c) {
               case '(': stack.push(')');
                   break;
               case '[': stack.push(']');
                   break;
               case '{': stack.push('}');
                   break;
               default:
                   if (c!== stack.pop()) {
                       return false;
                   }
           }
       }

       return stack.length === 0;
   };
    console.log(isValid(str))
