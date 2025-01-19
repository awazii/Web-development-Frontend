let hour, minute, second,milisec,a,b;
milisec=0;
second=0;
hour=0;
minute=0;
let updatetimer=()=>{
        milisec+=10
        if (milisec>=1000) {
            milisec=0
            second+=1;
        }
        if (second>59) {
            minute+=1;
            second=0;
        }
        if (minute>59) {
            hour+=1;
            minute=0
        }
        document.querySelector(".Stopwatch-hours").innerHTML=hour<10?"0"+hour:hour||"00"
        document.querySelector(".Stopwatch-minutes").innerHTML=minute<10?"0"+minute:minute||"00"
        document.querySelector(".Stopwatch-seconds ").innerHTML=second<10?"0"+second:second||"00"
        document.querySelector(".Stopwatch-miliseconds").innerHTML=(milisec < 100 ? '0' + (milisec / 10) : milisec / 10);
        console.log(milisec)
}
let start=()=>{
    if (!b) {
        a = setInterval(updatetimer,10)
        b=1;
    } 
}
document.querySelector(".str").addEventListener("click",start);
let pause=()=>{
    if (b===1) {
        clearInterval(a)
        console.log(12)
        b=0;
    }  
}
let resett=()=>{
    milisec=0;
    second=0;
    hour=0;
    minute=0;
    document.querySelector(".Stopwatch-hours").innerHTML="00"
    document.querySelector(".Stopwatch-minutes").innerHTML="00"
    document.querySelector(".Stopwatch-seconds ").innerHTML="00"
    document.querySelector(".Stopwatch-miliseconds").innerHTML="00"
    clearInterval(a)
    b=0
}
