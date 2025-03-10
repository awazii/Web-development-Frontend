// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// Solution:
 let strings = "Hello, World!";
    let vcount = 0;
    let vowelList = "aeiouAEIOU".split("");
    function checkvowels(string) {
        for (let index = 0; index < string.length; index++) {
            const element = string[index];
            if (vowelList.includes(element)) {
                vcount++;
            }
        }
        console.log(vcount); 
    }
    checkvowels(strings);