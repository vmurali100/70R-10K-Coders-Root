var conatainer =document.querySelector(".container");
var colorCard = document.querySelector(".color-card");

var hex = document.querySelector("#span");

function getNewColor(){
    var symbol = '0123456789ABCDEF';//16 symbols
    var color= '#';
    for(var i =0;i<6;i++){
        color = color+symbol(Math.floor(Math.random()))
    }

}