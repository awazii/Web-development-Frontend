let a,b,c,d,e,f;
let click1=()=>{
    a=document.querySelector(".js-button")
    b=a.classList.contains("js-cart1");
    if (!b) {
        a.classList.add("js-cart1")
    }
  else if (b) {
    a.classList.remove("js-cart1")
  }
}
let click2=()=>{
    a=document.querySelector(".js-button1")
    b=a.classList.contains("js-cart1");
    if (!b) {
        a.classList.add("js-cart1")
    }
  else if (b||d||f) {
    a.classList.remove("js-cart1")
  }
}
let click3=()=>{
    a=document.querySelector(".js-button2")
    b=a.classList.contains("js-cart1");
    if (!b) {
        a.classList.add("js-cart1")
    }
  else if (b) {
    a.classList.remove("js-cart1")
  }
}
let click4=(value)=>{
    a=document.querySelector(".js-button3")
    c=document.querySelector(".js-button4")
    d=document.querySelector(".js-button5")
    if (value==="a") {
        a.classList.add("js-cart1")
        c.classList.remove("js-cart1")
       d.classList.remove("js-cart1")
    }
  else if (value==="b") {
    c.classList.add("js-cart1")
     a.classList.remove("js-cart1")
     d.classList.remove("js-cart1")
  }
  else if (value==="c") {
    d.classList.add("js-cart1")
     a.classList.remove("js-cart1")
    c.classList.remove("js-cart1")
  }
}
