let food = {
    Coffee: 0,
    bagel: 0,
    soup: 0
}
let total = 0;
let total1 = 0;
let total2 = 0;
let final = 0
let food1 = (value) => {
    food[value] += 1
    total = food[value] * 5
    if (food[value]>10) {
        alert(`Cart is full add no more items in the Cart!`)
        food[value] -= 1
        total = food[value] * 5
    }
    final = total+total1+total2
    document.getElementById("food1").innerText = food[value]
    document.getElementById("out").innerText = total
    document.getElementById("Total3").innerText = final

}
let food2 = (value) => {
    food[value] += 1
    total1 = food[value] * 3
    if (food[value]>10) {
        alert(`Cart is full add no more Items in the Cart!`)
        food[value] -= 1
        total1 = food[value] * 3
    }
    final = total1+total+total2
    document.getElementById("food2").innerText = food[value]
    document.getElementById("total1").innerText = total1
    document.getElementById("Total3").innerText = final
}
let food3 = (value) => {
    food[value] += 1
    total2 = food[value] * 9
    if (food[value]>10) {
        alert(`Cart is full add no more items in the Cart!`)
        food[value] -= 1
        total2 = food[value] * 9
    }
    final = +total1+total2+total
    document.getElementById("food3").innerText = food[value]
    document.getElementById("total2").innerText = total2
    document.getElementById("Total3").innerText = final
}
let food1_1=(value)=>{
    food[value] -= 1
    total = food[value] * 5
    if (food[value]<0) {
        alert(`Not Enough Items in the cart DO NOT Update the Cart!!!!!`)
        food[value] += 1
        total = food[value] * 5
    }
    final = total+total1+total2
    document.getElementById("food1").innerText = food[value]
    document.getElementById("out").innerText = total
    document.getElementById("Total3").innerText = final
}
let food_2 = (value) => {
    food[value] -= 1
    total1 = food[value] * 3
    if (food[value]<0) {
        alert(`Not Enough Items in the cart DO NOT Update the Cart!!!!!`)
        food[value] += 1
        total1 = food[value] * 3
    }
    final = total1+total+total2
    document.getElementById("food2").innerText = food[value]
    document.getElementById("total1").innerText = total1
    document.getElementById("Total3").innerText = final
}
let food_3 = (value) => {
    food[value] -= 1
    total2 = food[value] * 9
    if (food[value]<0) {
        alert(`Not Enough Items in the cart DO NOT Update the Cart!!!!!`)
        food[value] += 1
        total2 = food[value] * 9
    }
    final = +total1+total2+total
    document.getElementById("food3").innerText = food[value]
    document.getElementById("total2").innerText = total2
    document.getElementById("Total3").innerText = final
}
let Clear = () => {
    document.getElementById("Total3").innerText = 0
    document.getElementById("total1").innerText = 0
    document.getElementById("total2").innerText = 0
    document.getElementById("out").innerText = 0
    document.getElementById("food1").innerText = 0
    document.getElementById("food2").innerText = 0
    document.getElementById("food3").innerText = 0
    final = 0
    total = 0;
    total1 = 0;
    total2 = 0;
    food.Coffee=0
    food.bagel=0
    food.soup=0
}
