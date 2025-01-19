console.log("hello THIS IS SET Timeout And Set interval")
const readlineSync = require('readline-sync');
    const input = parseInt(readlineSync.question('Enter The number 5  to stop the timeout and 7 to stop Interval: '));
let a=(a,b,c)=>{
    if ((a===9&&b===5)&&c===5) {
        clearTimeout(Timeout);//This will Cancel the timeout
        console.log("Set Timeout Stopped")
        return;
    }
    else if ((a===55&&b===9)&&c===7) {
        console.log("Set Interval Stopped");
        clearInterval(Interval);//THis will do the same but for Interval
        return;
    }
    console.log(a+b)
}
let Timeout=setTimeout(a,5000,9,5,input)//THis will run only once after certain time
    //this is a time id That is must to tell which Interval to stop
let Interval=setInterval(a,1000,55,9,input)//THis will run again and again after certain time
//IMPORTANT!!!!!! SET TIMEOUT AND SETINTERVAL ARE ONLY FOR FUNCTIONS