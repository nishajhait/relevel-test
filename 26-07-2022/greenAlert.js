class Enviromentlist {


    constructor(name, location) {
        this.name = name;
        this.location = location;

    }
    surveyArea(){
    //  console.log("survey of area"+this.name);
     return 100;
    }
    alertShow(){
        console.warn("please plant more trees");


    }
    plantTrees() {
        console.log("10 trres planted")
    }
}
const nishaObj = new Enviromentlist("Nisha", "Bihar")
nishaObj.surveyArea();
nishaObj.alertShow();
nishaObj.plantTrees();

const arunObj = new Enviromentlist("arun", "Bihar")
console.log(arunObj.surveyArea())


