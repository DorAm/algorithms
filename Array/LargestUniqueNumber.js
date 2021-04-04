/**
 * Largest Unique Number
 *
 * Given an array of integers A, return the largest integer that only occurs once.
 * If no integer occurs once, return -1.
 *
 * Time: O(n)
 * Space: O(n)
 *
 **/
function LargestUniqueNumber(A) {
    let countList = [];
    for (let i = 0; i < A.length; i++) {
        let item = A[i];
        if (countList[item]) {
            countList[item]++;
        } else {
            countList[item] = 1;
        }
    }
    let i = countList.length - 1;
    while (i >= 0) {
        if (countList[i] === 1) {
            return i;
        }
        i--;
    }
    return -1;
}

debugger;
LargestUniqueNumber([9, 9, 8, 8]);