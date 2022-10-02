let value ="madam";
const revValue=()=>{
    let myrev = value.toString().split("").reverse().join("");
    // let myrev = value.toString().split().reverse().join();
    let mystr = value.toString();
    console.log(myrev)
    console.log(mystr)
    if(myrev == mystr){
        console.log("palindRome")
    }
    else{
        console.log("not palind rome")
    }
}
revValue();