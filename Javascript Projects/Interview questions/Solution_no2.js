// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

//  Solution:
let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8];
function Double(numbers) {
    let result =[]
    let unique =[];
    for (const number of numbers) {
        if (!unique.includes(number)) {
            result.push(number*2);
            unique.push(number);
        }
        else{
            result.push(number);
        }
        
    }
    return result;
}
let result=Double(arr);
console.log(result);