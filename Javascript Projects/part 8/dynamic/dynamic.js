let copy;
let a = JSON.parse(localStorage.getItem("Box"))
let b= document.createElement("div")
b.classList.add("dupli");
b.innerHTML=a
document.body.append(b)
// b.innerHTML=a
document.body.append(b)
// JSON.parse(localStorage.getItem("Box"))||"";
let Thumbnail =document.querySelector('.Thumbnail').addEventListener('change', function(event) {
    const file = event.target.files[0]; 
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onload = (e)=>{
            const img = document.querySelector('.img').firstElementChild;
            img.src = e.target.result; 
        };
    }
});
let add;
let change=document.querySelector(".heading");
let title1 = (e) => { 
    add = e.target.value; 
    if (!add) {
      change.innerText = "Introduction to Backend | Sigma Web Dev video #2";
        console.log(change.innerText)
    }
    else{
        change.innerText = add;
    }
}
document.querySelector(".title").addEventListener("input", title1);
let hours=document.querySelector(".H").addEventListener("input",(e)=>{
   if(e.target.value.length>2){
    e.target.value= e.target.value.slice(0,2)
   }
   if (e.target.value<0) {
    e.target.value=0
   }
})
let minutes=document.querySelector(".M").addEventListener("input",(e)=>{
    if(e.target.value.length>2){
        e.target.value= e.target.value.slice(0,2)     
       }
       if (e.target.value<0) {
        e.target.value=0
       }
       if (e.target.value>59) {
        e.target.value=59
       }
})
let seconds=document.querySelector(".S").addEventListener("input",(e)=>{
    if(e.target.value.length>2){
        e.target.value= e.target.value.slice(0,2)          
   }
   if (e.target.value<0) {
    e.target.value=0
   }
   if (e.target.value>59) {
    e.target.value=59
   }
})
let calculations =()=>{
    let hours = parseInt(document.querySelector(".H").value)||0;
    let minutes = parseInt(document.querySelector(".M").value)||0;
    let seconds = parseInt(document.querySelector(".S").value)||0; 
    if (hours===0) {
        document.querySelector(".duration").innerHTML=
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
    }
    else{
        document.querySelector(".duration").innerHTML=  (hours < 10 ?`0${hours}`: hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
    }
}
let channel=document.querySelector(".channel")
let change_channel=document.querySelector(".channel1").addEventListener("input",(e)=>{
    if (!e.target.value) {
        channel.innerHTML="CodeWithHarry"
    }
    else{
        channel.innerHTML=e.target.value
    }
})
let month=document.querySelector(".months")
let change_month=document.querySelector(".month").addEventListener("input",(e)=>{
    if (!e.target.value) {
        month.innerHTML="2 months ago"
    }
    else if (e.target.value<0) {
        month.innerHTML="0 months ago"
    }
    else{
       month.innerHTML=`${e.target.value} months ago`
    }
})
let views=document.querySelector(".views")
document.querySelector(".views3").addEventListener("input", (e) => {
    let value = Math.floor(e.target.value);
    let formattedValue;
    
    if (!value) {
        document.querySelector(".views").innerHTML ="0 views"
}else if (value < 1000) {
        formattedValue = `${value} views`;
        document.querySelector(".views").innerHTML = formattedValue;
    } else if (value >= 1000 && value < 1000000) {
        formattedValue = `${(value / 1000)}K views`;
        document.querySelector(".views").innerHTML = formattedValue;
    } else if (value >= 1000000) {
        formattedValue = `${value / 1000000}M views`;
        document.querySelector(".views").innerHTML = formattedValue;
    }
});
let Copy=()=>{
    let node =document.querySelector(".container")
  copy = node.cloneNode(true);//to make its clone
  let del=document.createElement("button")
  del.classList.add("delete-btn")
  del.setAttribute("onclick", "del(this)");
  del.innerHTML='DELETE'
  copy.querySelector(".flex").appendChild(del)
   document.body.append(copy); 
   b.append(copy)
   console.log(b)
   localStorage.setItem("Box",JSON.stringify(b.innerHTML))
}
let delete1=()=>{
localStorage.removeItem("Box")
document.querySelector(".dupli").remove()
}
let del=(e)=>{
    e.closest(".container").remove()
    localStorage.setItem("Box",JSON.stringify(b.innerHTML))
}