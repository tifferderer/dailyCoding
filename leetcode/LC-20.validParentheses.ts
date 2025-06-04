//6/4/2025
//difficulty: easy


//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s: string): boolean {
    let stack = [];

    let bracketMap: {[key: string]: string} = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for(let char of s) {
        if(char in bracketMap) {
            stack.push(char);
        } else {
            if(stack.length === 0) {
                return false;
            }

            let top = stack.pop();

            if(bracketMap[top] !== char) {
                return false;
            }

        }
    }
    return stack.length === 0;
};