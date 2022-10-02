//Function Declaration is also known as function statement

// function a(){
//     console.log("a called");
// }
// a()

// //Function Expression 
//  var b = function (){
//     console.log("b called")
//  }
//  b()

 //the main difference is hoisting , if we try to call function a  before declaring it will give output but if we try to call b before declaring then it will throw error 

 a()
//  b()

 function a(){
    console.log("a called");
}


//Function Expression 
 var b = function (){
    console.log("b called")
 }

 //Anonymous functions does not have their own identity that means when we jst create an anonymous function 
 //then it will throw syntax error.
 

//  function () {

//  }

//Named function Expression means if a named function is assigned to  a variable

// let c = function nmd(){
//     console.log("named function")
// }
// c()

//if u try to access nmd
// nmd() 
//then it wil throw error but we can access it wihin the scope as  follow

var c = function nmd(){
    console.log(nmd);
}
c()

//the values which v pass while creating function are called parameters also called the labels 
//when send declaring function
var func1= function (param1,param2){
    console.log("func1 called"+" "+param1+" "+param2)
}
//the values we pass to the functin are called arguments
func1(4,"meena")

//FIRST CLASS FUNCTIONS
//the ability to use functions as values is known as fcf


var func2 = function(param1){
    return function xyz(){

    }
}
console.log(func2())

//SIRS FUNCTION CLASSES

//   function sampleFunction() {
      //     console.log("Hello From Function from Named And assigned");
      //   }

      // var sampleFunction = function (){
      //     console.log("I am function Expression")
      // };

      //   var someSampleFunction = sampleFunction;

      //   someSampleFunction()
      //   sampleFunction();

      // (function (){
      //     console.log("I am Self Invoked Function")
      // })()

      var someES6Function = (arg) => {
        console.log("Hello from FAF");
      }; // Arrow Function or Fat Arrow Function
      someES6Function();

//CALLBACK FUNCTIONS- a function which takes another function as input
//calling a function by passing another function inside that function then ot is called callback kfunction

// document.getElementById("clickme").addEventListener('click',()=>{
//     console.log("clicked")
// })

//closures demo with event Listeners

let count =0;

document.getElementById("clickme").addEventListener('click',()=>{
    console.log("clicked",++count)
})
