var numRescueBoats = function (people, limit) {
    people.sort((a, b) => (a - b));
    var num = 0
    let left = 0
    let right = people.length - 1

    while (left <= right) {
        if ((people[left] + people[right]) <= limit) {
            left++
        }
        right--
        num++
    }
    return num
    console.log(num)
};
let people = [2, 3, 5, 5];
const limit = 5;
console.log(numRescueBoats(people, limit))

