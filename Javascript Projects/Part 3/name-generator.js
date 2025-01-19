let a={
    1:"Crazy",
    2 :"Amazing",
    3 :"Fire"
}
let b={
    1 :"Foods",
    2 :"Garments",
    3 :"Bros"
}
let c={
    1 :"Limited",
    2 :"Hub",
    3 :"Engine"
}

let random =Math.floor(Math.random()*3); 
let random1 =Math.floor(Math.random()*3); 
let random2=Math.floor(Math.random()*3); 
console.log(`${a[random+1]} ${b[random1+1]} ${c[a=random2+1]}`); 

