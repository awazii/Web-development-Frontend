const object ={
name :'awais',
"father's name" :"tariq"
}
// object={
//     age:21,
// } not possible in const however
object.age=21 //it is possile
console.log(object)
//now in other to reassign object we use let
let name={
    "name":"awais",
    "father's name":"Tariq",
    "age":21
}
name={
    "martial status":"single",
    "employement":"Unemployed",
    bio:{
        from:"lahore",
        studies:"Bsse",
        skills:"WEB DEVELOPER",
        hobbies:{
            1:"gaming",
            2:"Anime",
            3:"Music"
        }
    },
    func:(value)=>{
      console.log('i am a function calling from an object '+ value);
        
    },
    func1(value){ 
        console.log("hello "+value)
   } //this is also the shortcut of storing function in the object
} // this will override the object
console.log(name.bio.hobbies[3])//this is called nexted objects
name.func(6)//this is called function in a object
name.func1(6)//this is called function in a object
//here are the important rules to call a function
//from now on whenever you need to call function inside the console.log() u must return something form function otherwise it will not run or it will show indefined
//when you call the function inside the object its syntax is 
//property:()=>{} for arrow function
//property:function(){}for normal function
// when calling function from object objectname.property(parameter.)
console.log(JSON.stringify(name))//to convert any object into json
let convert=JSON.stringify(name);
console.log(JSON.parse(convert));//to convert json back to an object
const Destruc={
    message:"hello!",
    price:800
}
//const message=Destruc.message; this 
const{message,price}=Destruc;//and this are same this is called object destructuring it is work like that it make new varaible with same name as propterty and store its value
console.log(message , price)
const destruc={
    price//this is the opposite of what we did in above  
};
console.log(destruc)
let obj3={k:2}
obj3.name="Awais"
console.log(obj3)
const realEvent = {
    target: document.createElement('button'),
  };
  realEvent.target.dataset.productId = '101';
  console.log(realEvent)