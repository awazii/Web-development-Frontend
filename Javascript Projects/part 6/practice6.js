let product={
    name:"BacketBall",
    price:1095,
}
let product1={
    name1:"Football",
    price1:5000
}
const{price,name}=product;
const{price1,name1}=product1;
product.price+=500
product["delivery-time"]="3 Days"
console.log(product)
let comparePrice=()=>{
    if (price<price1) {
        console.log(`${name} is less Expensive`)
        return;
    }
    else if (price>price1) {
        console.log(`${name1} is less Expensive`)
    }
}
let issameProduct=()=>{
 if ((price1===price1)&&(name===name1)) {
    return true;
 }
 return false
}
comparePrice(product,product1)
console.log(issameProduct())
let product3={
    name:"BacketBall",
    price:1095,
}
let product4={
    name1:"Football",
    price1:5000
}
product3=product4;
console.log(product3)// so now product 3 and values of product 4 beacuse it has same address as product 4 so they both are pointing to the same objects
console.log("Good Morning ".toLowerCase().repeat(2))