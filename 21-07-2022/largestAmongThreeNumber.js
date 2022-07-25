function largestAmongNumber(a,b,c){
       switch (a,b,c) {
        case (a>b && a>c): {
            
            console.log(a+  "a greatest b and c")
            break;
            }
        case (b>a && b>c) : {
              
            console.log(b+ "b greter a and c") 
            break;
        }
            case (c>a && c>b): {
             
            console.log(c+ "c greater a and b")  
            
            
            
        }
        default: {
            console.log("it is valid")
        }
            
            
    }
       
}
largestAmongNumber(15,25,20);
largestAmongNumber(12,12,14);
largestAmongNumber(10,19,12);
