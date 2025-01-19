let hour, minute, second,milisec,a,b;
document.querySelectorAll('.Hours')[0].addEventListener('change', function (event) {
    if (event.target.value!= "Start") {
        hour = event.target.value;
    }
}
);
document.querySelectorAll('.Hours')[1].addEventListener('change', function (event) {
    if (event.target.value!= "Start") {
        hour += event.target.value;
    }
}
);
document.querySelectorAll('.Minutes')[0].addEventListener('change', function (event) {
    if (event.target.value!= "Start") {
        minute = event.target.value;
    }
});
document.querySelectorAll('.Minutes')[1].addEventListener('change', function (event) {
    if (event.target.value!= "Start") {
        minute += event.target.value;
    }
});

document.querySelectorAll('.Seconds')[0].addEventListener('change', function (event) {
    if (event.target.value!= "Start") {
    second = event.target.value;}
});

document.querySelectorAll('.Seconds')[1].addEventListener('change', function (event) {
    if (event.target.value!= "Start") {
        second += event.target.value;}
});
document.querySelector(".str").addEventListener("click", () => {
    if (!b) {
        const dropdowns = document.querySelectorAll('.Hours');
    const dropdowns1 = document.querySelectorAll('.Minutes');
    const dropdowns2 = document.querySelectorAll('.Seconds');
    dropdowns.forEach(dropdown => {
        dropdown.selectedIndex = 0; // Reset to the first option ("Start")
    });
    dropdowns1.forEach(dropdown => {
        dropdown.selectedIndex = 0; 
    });
    dropdowns2.forEach(dropdown => {
        dropdown.selectedIndex = 0; 
    });
    hour=Number(hour)||0
    console.log(hour)
        minute=Number(minute)||0
        console.log(minute)
        second=Number(second)||0
        console.log(second)
        milisec=(hour*60*60+minute*60+second)*1000;
        console.log(milisec)
        if (milisec>0) {
            a= setInterval(run,1000)
       } 
       b=1;
    }
});
let run=()=>{
        hour=Math.floor(milisec/ (1000 * 60 * 60));
        minute=Math.floor(milisec % (1000 * 60 * 60) / (1000 * 60))
        second=Math.floor(milisec %(1000 * 60) / 1000)
        document.querySelector(".Timer-hours").innerHTML=hour<10?"0"+hour:hour||"00"
        document.querySelector(".Timer-minutes").innerHTML=minute<10?"0"+minute:minute||"00"
        document.querySelector(".Timer-seconds ").innerHTML=second<10?"0"+second:second||"00"
        console.log(milisec)
        milisec-=1000
        if (milisec<0) {
            clearInterval(a)
            b=0;
        } 
}
let pause=()=>{
    if (b==1) {
        clearInterval(a)
        b=2;
    }     
}
let play=()=>{
    if (b==2) {
        a= setInterval(run,1000)
        b=1;
    }
}
let resett=()=>{
    b=0;
    milisec=0;
    document.querySelector(".Timer-hours").innerHTML="00"
    document.querySelector(".Timer-minutes").innerHTML="00"
    document.querySelector(".Timer-seconds ").innerHTML="00"
}
