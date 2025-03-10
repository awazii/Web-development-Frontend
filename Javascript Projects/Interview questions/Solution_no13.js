// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

// Solution:
 function calculateTotal(products) {
     return products.reduce((total, product) => total +(product.price * product.quantity), 0);
 }
    const products = [
        { price: 150, quantity: 5 },
        { price: 500, quantity: 2 },
        { price: 350, quantity: 3 },
    ];
    console.log(`${calculateTotal(products)} Pkr`); 