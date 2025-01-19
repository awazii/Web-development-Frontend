function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function loadpage (){
    console.log("Page is loading");
    await delay(2000); 
   b();
    return 'resolve value';
}
loadpage ().then((value) => {console.log("Page is loaded",value);}) 
function b() {
    console.log('i am callback function ')
}
// you can store await in the varaible and then use it after the await is resolved anywhere in the async function