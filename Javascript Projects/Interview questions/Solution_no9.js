// The Asynchronous Shopper:
// Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

// Solution:
(async function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Order confirmed');
        }, Math.floor(Math.random() * 1000));
    });
})().then((result) => console.log(result));