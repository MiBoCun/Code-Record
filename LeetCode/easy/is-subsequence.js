/*给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）

示例 1:
s = "abc", t = "ahbgdc"

返回 true.

示例 2:
s = "axc", t = "ahbgdc"

返回 false.
*/

//392. 判断子序列


    /*var isSubsequence = function (s, t) {
     let index = -1;
     for (let i = 0; i < s.length; i++) {
         index = t.indexOf(s[i], index + 1);
         if (index > -1) {
             continue
         } else {
             return false
         }
     }
     return true
 };*/

    var isSubsequence = function(s, t) {
        let i = 0, j = 0;
        while( j < t.length) {
            if(s[i] === t[j]) {
                i++;
            }
            j++;
        }
        return i === s.length;
    };
    let s = "axc", t = "hbagxc";
    console.log(isSubsequence(s, t))



