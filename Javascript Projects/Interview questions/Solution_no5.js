// The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// Solution:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10, 11, 12, 13, 14, 15];
let sum = 0;
function sum1(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element < 0) {
            break;
            
        }
        else{
            sum += element;
        }
    }
}
sum1(arr);
console.log(sum); 