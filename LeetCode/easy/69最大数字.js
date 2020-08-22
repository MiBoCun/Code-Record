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
