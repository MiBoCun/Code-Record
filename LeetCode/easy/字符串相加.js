let addStrings = function (num1, num2) {
    let res = "";
    let isTen = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        let n1 = i >= 0 ? num1[i] - "0" : 0;
        let n2 = j >= 0 ? num2[j] - "0" : 0;
        let temp = n1 + n2 + isTen;
        res = (temp % 10) + res;
        isTen = temp >= 10 ? 1 : 0
        i--;
        j--;
    }
    return isTen > 0 ? isTen + res : res
}
let num1 = "9"
let num2 = "999"

console.log(addStrings(num1, num2))
