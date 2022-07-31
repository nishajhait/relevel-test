function  gradingSystem(num){
 if(num>=90){
    console.log("A+")

 }
 else if(num>79 && num<90){
console.log("B")
 }
 else if(num>59 && num<80){
    console.log("C")
 }
 else if(num>32 && num<60){
    console.log("D")

 }else{
    console.log("F")
 

}
}
gradingSystem(90)
gradingSystem(85)
gradingSystem(65)
gradingSystem(35)
gradingSystem(32)