// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
//  Solution:
let string ="awais"
function reverse(name) {
    let reversed = name.split("").reverse().join("");
    return reversed
}
console.log(reverse(string))

