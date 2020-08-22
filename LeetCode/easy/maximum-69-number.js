/*
给你一个仅由数字 6 和 9 组成的正整数 num。

你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 。

请返回你可以得到的最大数字。

输入：num = 9669
输出：9969
*/

//1323. 6 和 9 组成的最大数字
var maximum69Number = function (num) {
    let i = 0;
    let ary = num.toString().split('')
    while (i < ary.length) {
        if (ary[i] === '6') {
            ary[i] = '9';
            break
        }
        i++
    }
    return ary.join('');
};
let num = 696999;
console.log(maximum69Number(num))
