let arr = JSON.parse(localStorage.getItem("todo"))||[];
//    localStorage.removeItem("todo")
let arr1=JSON.parse(localStorage.getItem("todo1"))||[];
//   localStorage.removeItem("todo1")
let name1 = document.querySelector(".Tasks");
let date1=document.querySelector(".date");
let time1=document.querySelector(".time");
let display = document.querySelector(".display1");
let body=document.querySelector(".t-body")
let flag,flag1;
window.onload=()=>{
    update()
}
let update=()=>{
        body.innerHTML=""   
        arr.forEach((e, i) => {
            let create1 = document.createElement("tr");
            create1.classList.add("tasks")
            let {name,date,time,progress}=e
            create1.innerHTML=` <td class="count"><p>${i+1}</p></td>
                        <td class="Tasks1"><p>${name}</p></td>
                        <td class="date">${date}</td>
                        <td class="Time">${time}</td>
                        <td class="progess"><p>${progress}</p></td>
                        <td class="Actions"><button class="del">Delete <img src="/Javascript Projects/Part 9/To do List/delete-2-svgrepo-com.svg" alt=""></button> <button class="complete">complete <img src="/Javascript Projects/Part 9/To do List/completed-order-svgrepo-com.svg" alt=""></button>
                            <button class="edit-task">edit <img src="/Javascript Projects/Part 9/To do List/edit-3-svgrepo-com.svg" alt=""></button></td>`
            body.appendChild(create1);
            let del=document.querySelectorAll(".del")[i]
            del.addEventListener("click",()=>{
                  del1(i)
            })
            let edit=document.querySelectorAll(".edit-task")[i]
            edit.addEventListener("click",(e)=>{
                edited(e,i)
            })
             let complete=document.querySelectorAll(".complete")[i]
             complete.addEventListener("click",(e)=>{
                 completed(e,i)
             })
            });
            name1.value = "";
            date1.value=""
            time1.value=""
        }
    
let timeedit=(e)=>{
    let spliter=e.split(":")
    let[hours,minutes]=spliter
    console.log(hours,minutes)
   if (hours>=0&&hours<12) {
       hours=hours%12||12
      hours=hours<10?`0${hours}`:hours
       spliter=[hours,minutes]
       e=`${spliter.join(":")} AM`
       console.log(e)
   }
   else{
       hours=hours%12||12
       hours=hours<10?`0${hours}`:hours
       spliter=[hours,minutes]
        e=`${spliter.join(":")} PM`
        console.log(e)
   }
   return e;
}
let dateedit=(e)=>{
   let[year, month ,day]=e.split("-")
   e=`${day}-${month}-${year}`
   return e
}
let set=()=>{
let name=name1.value;
let time =time1.value;
let date=date1.value;
let progress="In-progress"
arr1.push({
    date,
    time
})
if (name==="") {
    name="Plz Enter a task"
}
if (!date) {
         date="Plz Enter a date"
 }
 else{
   date=dateedit(date)
 }
 if (!time) {
    time="Plz Enter a time"
}
else{
   time=timeedit(time)
}
    arr.push({
       name,
       date,
       time,
       progress
    });
    localStorage.setItem("todo",JSON.stringify(arr))
    localStorage.setItem("todo1",JSON.stringify(arr1))
    update();
}
document.querySelector(".clickk").addEventListener("click",set)
document.querySelector(".new").addEventListener("keydown",(event)=>{
    if (event.key==='Enter') {
        set()
    }
})

let del1=(i)=>{
    if (!flag1) {
        arr.splice(i,1)
        arr1.splice(i,1)
        update()
    localStorage.setItem("todo",JSON.stringify(arr))
    localStorage.setItem("todo1",JSON.stringify(arr1))
    }
}
 let completed=(e,i)=>{
    if (!flag1) {
        if (!flag) {
            let change=e.target.closest(".tasks")
            let obj=arr[i]
            console.log(obj)
          let{progress}= obj
          progress="Completed"
          arr[i]={
            ...obj,//to spread old values
            progress
        }
     change.querySelector(".progess").innerHTML=progress
     change.style.backgroundColor="rgb(49, 205, 40)"
     let tdElements = change.getElementsByTagName("td");
    Array.from(tdElements).forEach(element => {
        element.style.color = "white";
        document.querySelectorAll(".complete")[i].style.border="2px solid white"
    });
    flag=1
        }
      else{
        let change=e.target.closest(".tasks")
        let obj=arr[i]
        let{progress}= obj
        progress="In-progress"
        arr[i]={
            ...obj,//to spread old values
          progress
      }
        change.querySelector(".progess").
        innerHTML=progress
        change.style.backgroundColor="rgba(238, 230, 230, 0.496)"
        let tdElements = change.getElementsByTagName("td");
       Array.from(tdElements).forEach(element => {
           element.style.color = "black";
            document.querySelectorAll(".complete")[i].style.border="none"
       });
       flag=null;
      }
      localStorage.setItem("todo",JSON.stringify(arr))
      localStorage.setItem("todo1",JSON.stringify(arr1))
    }
 }
 document.querySelector(".java-del").addEventListener("click",()=>{
    arr = [];
    arr1=[];
    update();
    localStorage.setItem("todo",JSON.stringify(arr))
    localStorage.setItem("todo1",JSON.stringify(arr1))
 })
 let saved=(e,i)=>{
    let name=document.querySelector(".text-edit").value;
    let time=document.querySelector(".time-edit").value;
    let date=document.querySelector(".date-edit").value;
    if (!time) {
        time.value="Plz Enter a time";
    }
    if (!date) {
        date.value="Plz Enter a date";
    }
    arr1[i]={
        date,
        time
    }
    console.log(arr1)
    if (!date) {
        date="Plz Enter a date"
}
else{
  date=dateedit(date)
}
if (!time) {
   time="Plz Enter a time"
}
else{
  time=timeedit(time)
}
let obj=arr[i]
    arr[i]={
        ...obj,//to spread old values
        name,
        date,
        time
    }
    localStorage.setItem("todo",JSON.stringify(arr))
    localStorage.setItem("todo1",JSON.stringify(arr1))
    update();
    flag1=null
 }
 let edited=(e,i)=>{
    if (!flag1) {
        let {time,date}=arr1[i]
        let {name}=arr[i]
        let change=e.target.closest(".tasks")
       change.style.backgroundColor="rgba(238, 230, 230, 0.496)"
        change.innerHTML=`<td class="count"><p>${i+1}</p></td>
                            <td class="Tasks1"><input class="text-edit edit" type="text" value="${name}"></td>
                            <td class="date">
                                <input class="date-edit edit" type="date" value="${date}">
                            </td>
                            <td class="Time-edit edit"> <input class="time-edit edit" type="time" value="${time}"></td>
                            <td class="progess"><p>In-progress</p></td>
                            <td class="Actions"><button class="save">Save <img src="/Javascript Projects/Part 9/To do List/save-2-svgrepo-com.svg" alt=""></button>
                               </td>`
    let save=document.querySelector(".save")
    save.addEventListener("click",(e)=>{
        saved(e,i)
    })
    }
   flag1=1
 }

