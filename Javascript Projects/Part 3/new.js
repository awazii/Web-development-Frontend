// const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
// const date = currentDate.getDate(); // Day of the month (1-31)
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const dayOfWeek = daysOfWeek[currentDate.getDay()]; // Day of the week
function updateDateTime() {
    const greetingElement = document.getElementById('greeting');
    const TimeElement = document.getElementById('Time');
    const DateElement = document.getElementById('date');
    const dayElement = document.getElementById('Day');

    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour <=16) {
        greeting = "Good Afternoon";
    } else if (currentHour >16 && currentHour < 20) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Night";
    }
    greetingElement.textContent = greeting;
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const hours = (currentDate.getHours()%12);
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0'); 
    const formattedDate = `${date}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    dayElement.textContent = `Day: ${dayOfWeek}`;
    TimeElement.textContent = `Current Time : ${formattedTime}`;
    DateElement.textContent = `Current Date : ${formattedDate}`;
}
updateDateTime();
setInterval(updateDateTime, 1000);
function sayHello() {
    console.log("Hello, world!");
}
sayHello()
setInterval(sayHello(), 1000);
