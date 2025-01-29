// isnan detect non numbers
function main() {
    try {
        let a = Number(prompt("Enter first number"))
        let b = Number(prompt("enter the second number"))
        if (isNaN(a) || isNaN(b)) {
            throw new Error("plz enter number");
        }
        else {
            alert(a + b + c)
        }// this will gave error since c is not defined
        return true
    } catch (error) {
        console.log(error)
        return false
    }
    finally {
        console.log("i will run no matter what");
    }
    // try will detect errors and show them in the catch block, but try-catch is only for synchronous code. If the function is async, then try-catch can still be used.
    // The 'finally' block is part of the try-catch statement in JavaScript.
    // The 'finally' block will execute after the try and catch blocks, regardless of whether an exception was thrown or caught. Even if no error is caught.
    // The 'finally' block is often used in functions to ensure that certain code runs even if a return statement is encountered in the try or catch blocks.
    // This is useful for cleanup tasks, such as closing files or releasing resources, that must be performed no matter what.
}
console.log(main())