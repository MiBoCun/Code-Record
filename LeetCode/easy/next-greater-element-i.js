const ary1 = [1, 3, 5, 2, 4]
const ary2 = [6, 5, 4, 3, 2, 1, 7]
console.time('计时器')

function nextGreaterElement(nums1, nums2) {

    return nums1.map(cur => {
        let t = nums2.indexOf(cur);
        for (t, len = nums2.length; t < len; t++) {
            if (nums2[t] > cur) {
                return nums2[t]
            }
        }
        return -1
    })


};
console.timeEnd('计时器')
nextGreaterElement(ary1, ary2)

function inn(n) {
    if (n <= 1) {
        return 1
    }
    return n * inn(n - 1)

}

console.log(inn(4))
