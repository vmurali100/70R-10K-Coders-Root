let name={
    fname:"meena",
    lname:"seelam",
    getName:function(){
        console.log(this.fname+this.lname)
    }
}

name.getName();

//we can borrow functions from other objects and use it with some other objects
//call method is used to invoke a function directly by passing arguments
//apply is same as call but it takes second parameter as a array list

let name2 ={
    fname:"anil",
    lname:'kumar',
}
name.getName.call(name2)

let name3 ={
    fname:"vanshi",
    lname:'ankith',
}

//method:1
name.getName.call(name3)

// //method:2
// let getName=function(){
//     console.log(this.fname+this.lname)
// }
// getName.call(name)
// getName.call(name2)
// getName.call(name3)

//method:3

let getName = function(city,state){
    console.log(this.fname+this.lname+"  "+city+"  "+state)
}

getName.call(name2,"hyd","Ts")

//in the call method we will send the arguments separated by comma
//in the apply method we will send the arguments in square brackets

getName.apply(name2,["hyd","Ts"])
getName.apply(name,["hyd","Ts"])
getName.call(name2,"hyd","Ts")

//using bind method we can create a copy of function rather than calling it and we can call it afterwards

let getState=getName.bind(name3)
getState("hyd","Andhra")
