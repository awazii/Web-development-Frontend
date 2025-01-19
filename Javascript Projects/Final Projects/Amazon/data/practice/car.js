class Car {
     brand;
     model;
     speed=0;
     isTrunckopen=false;
     acceleration;
     break;
     info;
     stop;
     update;
     constructor(car){
        this.brand=car.brand
        this.model=car.model
        this.acceleration=setInterval(this.go.bind(this),1000)//bind reserve this
        this.break=setInterval(this.breaks.bind(this),2000)
        this.info=setInterval(this.displayInfo.bind(this),1000)
        this.stop=setInterval(this.stopcar.bind(this),20000)
     }
     displayInfo(){
        console.log(`${this.brand} ${this.model} ${this.speed} km/h ${this.isTrunckopen}`)
     }
     go(){
        if (!this.isTrunckopen) {
            if (this.speed<200) {
                this.speed+=5
            }
            if (this.speed>190) {
                this.breaks()
            }
           return;
        }
     }
     breaks(){
        if (this.speed>0) {
            this.speed-=5
        }
        return;
     }
     stopcar(){
        clearInterval(this.stop)
        clearInterval(this.acceleration)
       setInterval(this.breaks.bind(this),500)
      this.update=setInterval(this.updateinfo.bind(this),500)
     }
     opentruck(){
        if (this.speed<=0){
            this.isTrunckopen=true
            this.displayInfo()     
        }
     }
     closetrunk(){
        this.isTrunckopen=false
     }
     updateinfo(){
        if (this.speed<=0) {
            this.speed=0
            console.log(`${this.brand} ${this.model} is Stopped`)
            this.opentruck()
            clearInterval(this.break)
            clearInterval(this.info)
            clearInterval(this.update)
           }
     }
}
class Supercar extends Car{
    accelerator;
    #brand;
    #model;
    constructor(car){
        super(car)
        this.#brand=car.brand
        this.#model=car.model
      this.accelerator=car.accelerator
      this.acceleration=setInterval(this.go.bind(this),1000)
      this.break=setInterval(this.breaks.bind(this),2000)
      this.stop=setInterval(this.stopcar.bind(this),30000)
    }
    displayInfo(){
        console.log(`${this.#brand} ${this.#model} ${this.speed} km/h`)
     }
     go(){
        if (!this.isTrunckopen) {
            if (this.speed<300) {
                this.speed+=this.accelerator
            }
            if (this.speed>290) {
                this.breaks()
            }
           return;
        }
     }
     breaks(){
        if (this.speed>0) {
            this.speed-=this.accelerator
        }
        return;
     }
     stopcar(){
        clearInterval(this.stop)
        clearInterval(this.acceleration)
        setInterval(this.breaks.bind(this),500)
        this.update=setInterval(this.updateinfo.bind(this),500)
     }
     opentruck(){
     }
     closetrunk(){
     }
     updateinfo(){
        if (this.speed<=0) {
            this.speed=0
            console.log(`${this.brand} ${this.model} is Stopped`)
            clearInterval(this.break)
            clearInterval(this.info)
            clearInterval(this.update)
           }
     }
}
// let toyota =new Car({brand:'Toyota',model:'Corolla'})
// let Tesla =new Car({brand:'Tesla',model:'Model 3'})
let f1= new Supercar({brand:'McLaren',model:'F1',accelerator:20})