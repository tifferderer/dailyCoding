//6/3/2025
//difficulty: easy


//Given an integer x, return true if x is a palindrome, and false otherwise.
//An integer is a palindrome when it reads the same forward and backward.

function isPalindrome(x: number): boolean {

        const char = x.toString()
        let start = 0;
        let end = char.length-1;
    
        while(start < end) {
    
            if(char[start] !== char[end]) return false
    
            start++ ; //adjusting positions
            end--  ;
        }
        return true
        
    };