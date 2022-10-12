// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

// function x(){
//     var a = function y(){
//         console.log("hello")
//     }
//     return a();
// }

// x();


// function x(){
//     function y(){
//         console.log("hello")
//     }
//     return y;
// }

// var z=x();
// console.log(z)
// z();


function x(){
    var a = 10;
    function y(){
        console.log(a)
    }
    a=100;
    return y;
}

var z=x();
console.log(z)
z();