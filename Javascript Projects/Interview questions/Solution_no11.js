// The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

// Solution:
let products = [
    { name: 'cucumber', types: ['vegetable'], price: 150 },
    { name: 'banana', types: ['fruit'], price: 80 },
    { name: 'celery', types: ['vegetable'], price: 120 },
    { name: 'orange', types: ['fruit'], price: 100 },
    { name: 'chicken breast', types: ['meat', 'poultry'], price: 500 },
    { name: 'salmon', types: ['fish', 'meat'], price: 800 },
    { name: 'milk', types: ['dairy'], price: 120 },
    { name: 'bread', types: ['bakery'], price: 50 },
    { name: 'almonds', types: ['nut'], price: 600 },
    { name: 'olive oil', types: ['oil'], price: 900 }
];
let filters={price:2500,type:['vegetable','nut']};
function filterProducts(products, filter) {
    return products.filter((product)=>{
        return product.types.some((type)=>filter.type.includes(type)) && product.price <= filter.price;
        //some() method tests whether at least one element in the array passes the test implemented by the provided function.
    });
}
console.log(filterProducts(products,filters))

