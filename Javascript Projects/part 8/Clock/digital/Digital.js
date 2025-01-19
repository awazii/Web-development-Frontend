function updateTime() {
const currentDate = new Date();
let daysOfWeek =["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
let dayOfWeek =  currentDate.getDay()
let hour=currentDate.getHours()%12||12
let minutes=currentDate.getMinutes()
let seconds=currentDate.getSeconds()
let date=currentDate.getDate()
let Year=currentDate.getFullYear()
let Month=currentDate.getMonth()+ 1
let greeting;
hours=currentDate.getHours()
if (hours >= 5 && hours < 12) {
    greeting = "Good Morning";
    document.querySelector(".greetings").innerHTML=`${greeting}<img src="/Javascript Projects/part 8/Clock/digital/dawn.png" alt="dawn">`
     document.body.style.background ="linear-gradient(45deg, #ffb347 0%, #04d5f6b4 60%)";
  }
    else if (hours >= 12 && hours < 16) {
      greeting = "Good Afternoon";
    document.querySelector(".greetings").innerHTML=`${greeting} <img src="/Javascript Projects/part 8/Clock/digital/afternoon.png" alt="afternoon">`
     document.body.style.background ="linear-gradient(45deg, #0f9df5a0 0, rgba(61, 61, 62, 0.098) 100%)"
    }   
 else if (hours >=16 && hours < 19) {
    greeting = "Good Evening";
    document.querySelector(".greetings").innerHTML=`${greeting} <img src="/Javascript Projects/part 8/Clock/digital/sunset-.png" alt="sunset">`
    document.body.style.background = " linear-gradient(-15deg, #ff4400 0%, #09b9d49a 60%)";
} else {
    greeting = "Good Night";
    document.querySelector(".greetings").innerHTML=`${greeting} <img src="/Javascript Projects/part 8/Clock/digital/night.png" alt="night">`
   document.body.style.background = "linear-gradient(0deg, #050709 0%, #0f4482 80%)";
   document.querySelector(".clock-container").style.boxShadow="8px 10px 11px rgba(137, 136, 136, 0.395), 0 15px 90px 0px rgb(246, 246, 246)"
}
  document.querySelector(".clock-day").innerHTML=daysOfWeek[dayOfWeek]
  document.querySelector(".clock-hours").innerHTML=hour < 10 ?`0${hour}`: hour
  document.querySelector(".clock-minutes").innerHTML=minutes < 10 ? '0' + minutes : minutes
  document.querySelector(".clock-seconds").innerHTML=  seconds < 10 ? '0' + seconds : seconds;
  document.querySelector(".clock-date").innerHTML=date <10 ?"0"+date:date
  document.querySelector(".clock-Month").innerHTML=Month< 10 ? '0' +Month:Month
  document.querySelector(".clock-Year").innerHTML=Year
}
updateTime()
setInterval(updateTime,1000);



