var twoSum = function (nums, target) {
    let difs = {}
    for (let i = 0; i
    < nums.length; i++) {
        let dif = target - nums[i]
        if (difs[dif] != undefined) {
            return [difs[dif], i]
        } else {
            difs[nums[i]] = i
        }
    }
    return difs
}

let ary = [2, 7, 11, 15]//升序数组
let tar = 9;





