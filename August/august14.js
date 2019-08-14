// For each number in an array, check if that number is greater than the sum of all numbers that appear before it in the array. If all numbers in the array pass this test, return true. Return false otherwise.

function greaterThanSum(nums) {
    let sumnums = 0
    for (let i = 0; i<nums.length;i++){
        console.log(sumnums , nums[i])
        if (sumnums >= nums[i]){
            return false
        }
        sumnums+= nums[i]
    }
    return true
}

console.log(greaterThanSum([5, 7, 15, 52, 88, 173, 346, 686, 1393, 2765]))