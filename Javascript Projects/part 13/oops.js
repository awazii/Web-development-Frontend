class father {
    #name
    constructor(value) {
        this.#name = value;
        this.show();
    }
    show() {
        console.log(`Parent is ${this.#name}`)
        setTimeout(this.show.bind(this), 5000);
    }
}
// inheritance it is used to get the properties of one class to another class
class child extends father {
    name;
    constructor(value) {
        super(value);// this is must to call the parent constructor otherwise it will give error
        this.name = value;
        this.show();
        this.other();
    }
    other() {
        super.show(); // it is used to call the parent method
    }
    // method overriding it is used to override the method of parent class
    show() {
        console.log(`Child is ${this.name}`);
    }
}
let parent = new father("Tariq");
let children = new child("Awais")
// instanceof it is used to check the object is instance of the class or not Note:( Child is instance of father class but father is not instance of child class)
console.log(parent instanceof father)
console.log(children instanceof father)
//  let check =parent.show.bind(parent);
//  check();
// we use bind to get the methods and property of the object in global scope  cuz this in global refer to global object and also in async method cuz By the time the callback function is executed (in this case, the function passed to setTimeout or setInterval), the context or properties of the object might have changed, causing unexpected behavior or errors.

// Prototype
let a = {
    name: 'Awais',
    age: 21
}
let b = {
    hobbies: {
        first: "coding",
        second: "gaming"
    }
}
a.__proto__ = b;
console.log(a.hobbies.second)
// so prototype is a way to get the properties of one object to another object

// Static method
class MathHelper {
    static add(a, b) {
        return a - b;
    }
}
console.log(MathHelper.add(30, 20)); // Output: 10
// Static method is used to call the method without creating the object of the class  

// getter and setters
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newname) {
        if (newname.length <= 3) {
            console.log("Name is too short")
            return;
        }
        this._name = newname;
    }
}
let user =new User("Awais");
console.log(user.name)
user.name="yook" // to set new name using setter
console.log(user.name)






