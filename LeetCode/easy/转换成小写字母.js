<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<div class="notranslate"><p>实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。</p>

  <p>&nbsp;</p>

  <p><strong>示例 1：</strong></p>

  <pre><strong>输入: </strong>"Hello"
<strong>输出: </strong>"hello"</pre>

  <p><strong>示例 2：</strong></p>

  <pre><strong>输入: </strong>"here"
<strong>输出: </strong>"here"</pre>

  <p><strong>示例</strong><strong>&nbsp;3：</strong></p>

  <pre><strong>输入: </strong>"LOVELY"
<strong>输出: </strong>"lovely"
</pre>
</div>
</body>
<script>
    var toLowerCase = function(str) {
        let res=""
        for(let i=0;i<str.length;i++){
            let code=str.charCodeAt(i)
            if(65<=code&&code<=90){
                res+=String.fromCharCode(code+32)
            }else{
                res+=str[i]
            }
        }
        return res;
    };
    let str="LOVELY";
    console.log(toLowerCase(str))
</script>
</html>