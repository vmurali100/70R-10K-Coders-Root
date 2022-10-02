//Currying is a checking method to make sure that you get everything you need before you proceed. It helps you to avoid passing the same variable again and again.
//currying is basically presetting the arguments to a value

//Currying can be achieved using 2 methods the 
//1. using bind method
//2.using closure

let multiply = function (a,b){
    console.log(a*b);
}

// let multiplyTwo = multiply.bind(this,2)
// multiplyTwo(4)
// multiplyTwo(6)

//u can also do this as 
let multiplyTwo = multiply.bind(this,2,5)//in this case the method will ignore the arg passed wile calling that is it will ignore 4 and it will take 2 and 5  as respective args and multiply 2,5 instead of 2,4
multiplyTwo(4)

let multiplyThree = multiply.bind(this,3,6)
multiplyThree(4)
multiplyThree(6)

let multiplyC = function(x){
    return function(y){
        console.log(x*y);
    }
}
let mutlipyFive = multiplyC(5)
mutlipyFive(8)
mutlipyFive(9)

let mutlipyNine = multiplyC(9)
mutlipyNine(6)
mutlipyNine(4)