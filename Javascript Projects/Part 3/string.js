 /*
Javascript Strings propertoes and functions)
1,.lenght it will give you the lenght of string
2,.charAt() it will give you the string of specific index like awais.charAt(4) means s.
3,.CharCodeAt() it will give you its unicode.
4,.concat()you can add new string with it.
5,.include() it will give you true and false based on what is written inside the bracket like"awais".include(a) is will be true beacuse it is included.
6,indexOf(): Returns the index of the first occurrence of a specified value.
7,.lastIndexOf(): Returns the index of the last occurrence of a specified value.
8,.replace(searchValue, newValue): Replaces a specified value with another value in a string
9,search(regex): Searches a string for a specified value and returns its position.
10.slice(start, end): Extracts a part of a string and returns it as a new string.
11,split(separator, limit): Splits a string into an array of substrings.
12,substring(start, end): Extracts characters from a string between two specified indices.
13,toLowerCase(): Converts a string to lowercase letters.
14,toUpperCase(): Converts a string to uppercase letters.
15,trim(): Removes whitespace from both ends of a string.*/
 console.log(`my name is "awaisssssssssssss"`.search("s"))

 let c="Awais";
 console.log(c.slice(0,-1))//it is for revorse removal.
 console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)
let sentence = "Hello, how are you?";
let words = sentence.split(" ");
console.log(words); // Output: ["Hello,", "how", "are", "you?"]
let csvData = "name,age,city";
let fields = csvData.split(",");
console.log(fields); // Output: ["name", "age", "city"]
let str = "Hello, world!";
let result = str.substring(0, 5); // "Hello"
let swapped = str.substring(5, 0); // "Hello" (swaps indices)
let negative = str.substring(-3, 5); // "Hello" (negative treated as 0)
console.log(swapped);
console.log("har\"".length)
console.log(c.toLowerCase())
console.log(c.toUpperCase())
console.log("Please give Rs 1000".slice(12,13))
console.log("Please give Rs 1000".replace("j"))
let originalString = "Please give Rs 1000";
let partToReplace = originalString.slice(12, 14); // Extract "Rs"
let modifiedPart = partToReplace.replace("R", "s"); // Replace "R" with "s"
let modifiedString = originalString.slice(0, 12) + modifiedPart + originalString.slice(14);

console.log(modifiedString); // Outputs "Please give ss 1000"
let text = "The rain in SPAIN stays mainly in the plain";
let esult = text.match("ain");
console.log(esult); // ["ain"]
let phoneNumber = "0323-4150-816";
let number =phoneNumber.match((/\d{4}-\d{4}-\d{3}/))
if (phoneNumber.match(/\d{4}-\d{4}-\d{3}/)) {
    console.log("Valid phone number! and it is ",number[0]);
} else {
    console.log("Invalid phone number.");
}


/*let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match("ain");
console.log(result); // ["ain"]
Using Regular Expression:
Global Search:
let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match(/ain/g);
console.log(result); // ["ain", "ain", "ain"]
Global and Case-Insensitive Search:
let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match(/ain/gi);
console.log(result); // ["ain", "AIN", "ain"]
 */

let ext = "My email is awaisgamer1231@example.com";
let emailPattern =  /([^\s@]+)@([^\s@]+\.[^\s@]+)/;
let matches = ext.match(emailPattern);
if (matches) {
    console.log("Found email:", matches[0]);
    console.log("Full match:", matches[0]); // The entire matched email
    console.log("Local part:", matches[1]); // The part before the @
    console.log("Domain part:", matches[2]); // The part after the @
}
