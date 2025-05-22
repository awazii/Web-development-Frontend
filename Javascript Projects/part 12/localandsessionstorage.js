//local storage
localStorage.setItem("key",JSON.stringify("value"))
JSON.parse(localStorage.getItem("key","value"))
localStorage.removeItemItem("key","value")
localStorage.clear()
//these are used for  local storage mostly they will use 
//for more info check notes
//session storage
sessionStorage.setItem("key",JSON.stringify("value"))
JSON.parse(sessionStorage.getItemItem("key","value"))
sessionStorage.removeItemItem("key","value")
sessionStorage.clear()
//works same as local storage but until page refeshes or closed
window.onstorage=(e)=>{
    alert("Changes happen",e)
}
//that event triggers when storage changes eiher its local/session