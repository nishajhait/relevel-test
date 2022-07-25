function attendClass(userType){
    if(userType=="student"){
         console.log("attend");
    } else if(userType=="instructor"){
    console.log("allow")
}else{
    console.log("not allow")
}
    }
    attendClass("student");
   attendClass("instructor");
    attendClass("unknown");