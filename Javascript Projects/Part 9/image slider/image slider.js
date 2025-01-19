let btn = document.querySelector(".navigation")
let sliding = 0
let slides = document.querySelector(".slides")
let backup= slides.innerHTML
// localStorage.removeItem("images")
slides.innerHTML=JSON.parse(localStorage.getItem("images"))||backup;
let images = document.querySelectorAll(".image")
let next = document.querySelector(".right")
let star, noticee, container, end, start, auto1, stop1, nav4, looker,slides1;
checker=0;
let previous = document.querySelector(".left")
for (let index = 0; index < images.length; index++) {
    let btnnav = document.createElement("button")
    btnnav.classList.add("btn-nav")
    btn.appendChild(btnnav)
}
let nav1 = document.querySelectorAll(".btn-nav")[0]
nav1.classList.add("btn-nav1")
let reset = () => {
    let a = document.querySelectorAll(".btn-nav");
    a.forEach(e => {
        e.classList.remove("btn-nav1")
    })
}
let nav2 = (e) => {
    let a = document.querySelectorAll(".btn-nav")
    a[e].classList.add("btn-nav1")
}
let btnhnav=()=>{
    nav4 = document.querySelectorAll(".btn-nav")
    console.log(nav4)
    console.log(nav4.length)
    nav4.forEach((e, i) => {
        e.addEventListener("click", () => {
            if (!looker) {
                sliding = i
                slides.style.transform = `translateX(-${sliding * 40}vw)`
                reset();
                nav2(sliding)
                previous.hidden = false
                next.hidden = false
                if (sliding >= images.length - 1) {
                    next.hidden = true
                }
                if (sliding === 0) {
                    previous.hidden = true
                }
            }
            console.log("hello")
        })
    })
}
btnhnav()
document.querySelector('.user').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                const newImage = document.createElement('img');
                newImage.src = e.target.result;
                newImage.classList.add('image',"image2");
                slides.appendChild(newImage);
                images = document.querySelectorAll('.image');
                console.log(images.length)
                let btnnav = document.createElement("button")
                btnnav.classList.add("btn-nav")
                btn.appendChild(btnnav)
                btnhnav()
                slides1=slides.innerHTML
                next.hidden = false
                localStorage.setItem("images",JSON.stringify(slides1))
             backward1()
                      };
    }
  
});
previous.hidden = true
let forward = () => {
    if (sliding <= images.length - 2) {
        sliding++
        slides.style.transform = `translateX(-${sliding * 40}vw)`
        console.log(sliding * 40, sliding)
        reset();
        nav2(sliding)
        previous.hidden = false

    }
    if (sliding >= images.length - 1) {
        next.hidden = true
    }
}
let forward1 = () => {
    if (sliding <= images.length - 2) {
        sliding++
        slides.style.transform = `translateX(-${sliding * 40}vw)`
        console.log(sliding * 40, sliding)
        reset();
        nav2(sliding)

    }
    else
        if (sliding >= images.length - 1) {
            sliding = 0;
            slides.style.transform = `translateX(-${sliding * 40}vw)`
            console.log(sliding * 40, sliding)
            reset();
            nav2(sliding)
        }
}
let backward = () => {
    if (sliding > 0) {
        sliding--
        slides.style.transform = `translateX(-${sliding * 40}vw)`
        console.log(sliding * 40, sliding)
        next.hidden = false
        reset();
        nav2(sliding)
    }
    if (sliding === 0) {
        previous.hidden = true
    }
}
let backward1=()=>{
    sliding=0
     slides.style.transform = `translateX(-${sliding * 40}vw)`
     reset();
     nav2(sliding)
     previous.hidden = true
     next.hidden = false
}

next.addEventListener("click", forward);
previous.addEventListener("click", backward)
end = document.querySelector(".end").addEventListener("click", (() => {
    if (!looker) {
        sliding = images.length - 1
        slides.style.transform = `translateX(-${sliding * 40}vw)`
        console.log(sliding * 40, sliding)
        next.hidden = true
        previous.hidden = false
        reset();
        nav2(sliding)
    }
}))
start = document.querySelector(".start").addEventListener("click", () => {
    if (!looker) {
        sliding = 0;
        slides.style.transform = `translateX(-${sliding * 40}vw)`
        console.log(sliding * 40, sliding)
        next.hidden = false
        previous.hidden = true
        reset();
        nav2(sliding)
    }
})
let auto = () => {
    if (!looker) {
        star = setInterval(forward1, 3000)
        noticee = document.createElement("h2")
        noticee.classList.add("Notice")
        noticee.innerHTML = "Auto Play is on buttons won't work"
        container = document.querySelector(".container")
        container.prepend(noticee)
        noticee.hidden = false
        previous.hidden = true
        next.hidden = true
        looker = 1
    }
}
auto1 = document.querySelector(".auto")
auto1.addEventListener("click", auto)
let stop = () => {
    if (looker) {
        clearInterval(star)
        noticee.hidden = true
        looker = false
        next.hidden = false
        previous.hidden = false
    }
}
stop1 = document.querySelector(".stop").addEventListener("click", stop)
let deletebutton=()=>{
    if (!looker) {
        slides=document.querySelector(".slides")
        if (slides.lastElementChild.classList.contains("image2")) {
            slides.lastElementChild.remove();
            slides=document.querySelector(".slides")
            btn.lastElementChild.remove()
            slides1=slides.innerHTML
            backward1()
            images = document.querySelectorAll(".image")
            localStorage.setItem("images",JSON.stringify(slides1))
            console.log("Deleted an image with class 'image2'.");
        } else {
            console.log("No image with class 'image1' to delete.");
        }  
    }
   
 }
 document.querySelector(".remove").addEventListener("click",deletebutton)
