// The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

// Solution:
async function brewCoffee(type) {
    console.log(`Brewing ${type} coffee...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${type} is ready`);
        }, Math.floor(Math.random() * 5000));
    });
}
brewCoffee('Espresso').then(console.log);