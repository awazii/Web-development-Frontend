class Complex{
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    tostring(){
        console.log(`The complex number is ${this.real} + ${this.imaginary}i`)
    }
    static add(c1,c2){
        let real = c1.real + c2.real;
        let imaginary = c1.imaginary + c2.imaginary;
        return new Complex(real,imaginary);
    }
    get complex_parts(){
        return {real: this.real, imaginary: this.imaginary};
    }
    set complex_parts(complex){
         this.real = complex.real;
         this.imaginary = complex.imaginary;
    }
}
let c1 = new Complex(10,12);
let c2 = new Complex(20,22);
let result = Complex.add(c1,c2);
result.tostring();
c1.complex_parts=new Complex(21,25);
console.log(c1.complex_parts);
class Human {
    constructor(input) {
        this.name = input;
    }
    see(){
        console.log(`My name is ${this.name}`);
    }   
}
class Student extends Human{
    constructor(input){
        super(input);
    }
    see(){
        console.log(`My name is ${this.name} and i am a student`);
    } 
}
let human = new Human("Awais");
human.see();
let student = new Student("Awais");
student.see();
console.log(student instanceof Human);