let array =[1,2,3,4,5,6,7,8,'awais',true,6]
//        =[0,1,2,3,4,5,6,7]  
array[5]=700
console.log(array)
console.log(array.length)
console.log( array[9]) 
console.log(typeof array) 
console.log(array.indexOf()) 
/*Array methods*/ 
// 1,toString() to convert array into string
let b = array.toString()
console.log(b)
// 2,join() to add a string after each element of array and made the whole array one string
console.log(array.join( " + " )) 
//3,pop() to rip of last element of array
let pop = array.pop()
console.log(pop)
console.log(array.pop())
console.log(array)
//4, push() to add new element in the end of the array
array.push(799);
console.log(array)
//5, shift() to rip of first element of array
console.log(array.shift());
console.log(array);
//6, unshift() to add new element in the beginning of an array
console.log(array.unshift(69));
console.log(array);
//7, delete to delete the element value 
delete array[2]
console.log(array)
//8,concat() to add another array in the current array. but main array remain the same so array variable remains same
let a =["awais","saad","habib"].join(" And ");
console.log(array.concat(a));
//9, sort() for sorting array elements number wise and alphabatically and also it can take function and compare accordingly which is hard for me now maaybe in future
let compare=(a,b)=>{
    return a-b;
}
console.log(`${array.sort(compare)} this is sort`)
//10,splice()to remove specifice section of an array and also add new elements to array
let array1=[2,4,5,7]
console.log(array1)
console.log(array1.splice(2,2,4,5));
//                    removed,added (parts)
console.log(array1)
//11, slice() so extract specific element of array but no included last element.
let c = array1.slice(1,3);
console.log(c);
console.log(array1); // but the orignal array is same 
//12, reverse() to reverse the elements 
console.log(array1.reverse()) 
console.log(Array.isArray("a"))// to check if it is an array
// array1.find return the first matching element or undefined if nothing finds
