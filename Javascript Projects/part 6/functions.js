let greet=(name)=>{
    if (!name) {
        console.log("HI there!")
        return;
    }
    console.log(`hello ${name}`);
}
let converter1=(value,degree)=>{
    if (degree==="f") {
        (value-32)*5/9
        console.log(`${value}°Celsius is equal to ${(value-32)*5/9}° Fahrenheit`)
    }
    else if (degree==="c") {
        (value*9/5)+32
        console.log(`${value}° Fahrenheit is equal to ${(value*9/5)+32}° Celsius`)
    } 
}
let convertlenght=(lenght,from,to)=>{
    if (from==="km" &&to==="miles") {
        console.log(`${lenght} ${from} is equal to ${lenght* 0.62} ${to}`)
        return;
    }
    else if (from==="miles" &&to==="km") {
        console.log(`${lenght} ${from} is equal to ${lenght*1.6} ${to}`)
        return;
    }
    else if (from==="km" &&to==="ft") {
        console.log(`${lenght} ${from} is equal to ${lenght*3281} ${to}`)
        return;
    }
    else if (from==="miles" &&to==="ft") { 
        console.log(`${lenght} ${from} is equal to ${lenght*5280} ${to}`)
        return; 
    }
    else if (from===to) {
        console.log("Both lenghts are same")
    }
    else{
        console.log("Invaild values")
    }
}
greet("Awais")
greet("Saad")
greet()
converter1(25,"c")
convertlenght(32,"miles","miles")