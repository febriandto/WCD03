function isPalindrome(str: string): boolean {
    let reversed: string = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));