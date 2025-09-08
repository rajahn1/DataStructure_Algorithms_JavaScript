# Frequency Counter - findAllDuplicates

## Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.
```
```
  `  findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
    findAllDuplicates([4, 3, 2, 1, 0]) // []
    findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1`

Time Complexity - O(n)

Multiple Pointers - averagePair

Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

    averagePair([1,2,3],2.5) // true
    averagePair([1,3,3,5,6,7,10,12,19],8) // true
    averagePair([-1,0,3,4,5,6], 4.1) // false
    averagePair([],4) // fals


Sliding Window - minSubArrayLen


    Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

    This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
    Examples:

        minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
        minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
        minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
        minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
        minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
        minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
        minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

    Time Complexity - O(n)

    Space Complexity - O(1)e
