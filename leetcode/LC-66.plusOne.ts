// 6/5/2025
//difficulty: easy
// 
// You are given a large integer represented as an integer array digits, 
// where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in 
// left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

function plusOne(digits: number[]): number[] {
    let lastPosition = 1;
    while (lastPosition > 0) {
             if(digits[digits.length - lastPosition] === 9) {
            digits[digits.length - lastPosition] = 0;
            lastPosition++;
        } else {
            digits[digits.length - lastPosition] = digits[digits.length - lastPosition] + 1
            lastPosition = 0;
        }
        if(digits.length < lastPosition) {
            digits.unshift(1);
            lastPosition = 0;
        }
    }
    return digits;
};