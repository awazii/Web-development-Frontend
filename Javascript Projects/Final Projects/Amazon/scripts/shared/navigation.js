window.addEventListener("scroll",()=>{
    let navbtn=document.querySelector(".navigation")
    if (window.scrollY>300) {
        navbtn.style.display="block"
    }
    else{
          navbtn.style.display="none"
    }
})
document.querySelector(".navigation").addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})
