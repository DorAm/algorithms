/**
 * Valid Parentheses:
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']'
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * Time: O(n)
 * Space: O(n)
 */

let parentheses = Object.freeze({
    ')': '(',
    ']': '[',
    '}': '{',
});

function ValidParentheses(str) {
    let stack = [];
    let i = 0;
    while (i < str.length) {
        let char = str[i];
        if (isOpeningParentheses(char)) {
            stack.push(char)
        } else {
            if (parentheses[char] !== stack.pop()) {
                return false;
            }
        }
        i++;
    }
    return stack.length === 0;
}

function isOpeningParentheses(char) {
    return char === '(' || char === '[' || char === '{';
}
