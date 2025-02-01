// document.cookie="hello=1"// this add new cookie
// document.cookie=`${encodeURIComponent("'agasg';")}=${encodeURIComponent("agag_")}`
//  document.cookie=`new=cookie;max-age=0`
// // document.cookie="jhj=1"
// console.log("Cookies after setting:", decodeURIComponent(document.cookie));
//cookies are set by web server to store some data in the browser like our user id.
// we can update cookie of same name by rewriting it just like in object keys.
// immediately delete cookie we use max-age or expire
// once you made a cookie you just can't undo it like removing the code or rewriting it you need to do the step  of deleting it.
// cookies is separated by ; so if your key has; you need to wrap it in the encodeuricompenent otherwise value will be ignored
// for more details check notes
// Log the current cookies to verify deletion
 document.cookie = "userid=5;expires=Thu, 30 Jan 2025 08:11:25 GMT;path=/";
console.log(document.cookie)
// danger zone cookies are annyoing make sure to shut the server before making new ones in front end
