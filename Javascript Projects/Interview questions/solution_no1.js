// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

//  Solution:
let students=["Awais tariq",'Arshman Zafar',"Abdul Hanan","Saad Khalid","Habib Khalid","Emaan Arshman","warda usman"]
let houses= ["Gryffindor","Hufflepuff","Ravenclaw","Slytherin"]
students.forEach(student=>{
    if(student.length<6){
        console.log(`${student} is assigned to ${houses[0]}`)
    }else if(student.length<8){
        console.log(`${student} is assigned to ${houses[1]}`)
    }else if(student.length<12){
        console.log(`${student} is assigned to ${houses[2]}`)
    }else{
        console.log(`${student} is assigned to ${houses[3]}`)
    }
})