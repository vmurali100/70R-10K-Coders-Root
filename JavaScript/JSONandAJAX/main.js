
// var myPets=[
//     {
//         "name":"meowsalt",
//         "species":"cat",
//         "favFood":"carrots",
//     },
//     {
//         "name":"bowdows",
//         "species":"dog",
//         "favFood":"bones",
//     },
//     {
//         "name":"cocoo",
//         "species":"bird",
//         "favFood":"cocool"
//     }
// ]

var pageCounter = 1;
var animalContainer = document.getElementById('animal-info');

var btn =document.getElementById("btn");
const url='https://learnwebcode.github.io/json-example/animals-1.json';

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');

    ourRequest.onload = function(){
    let data = JSON.parse(ourRequest.response);
    renderHTML(data);
    };
ourRequest.send();
pageCounter++;
if(pageCounter >3){
    btn.style.display="none";
}
})


function renderHTML(data){
    var htmlString ="";
    for(i=0;i<data.length;i++){
        htmlString += "<p>"+data[i].name +' is a ' + data[i].species+ " that likes to eat ";

        for(j=0;j<data[i].foods.likes.length;j++){
            if(j==0){
                htmlString += data[i].foods.likes[j];
            }else{
                htmlString +=" and "+ data[i].foods.likes[j];
            }
            
        }

        htmlString += ' and dislikes ';

        for(j=0;j<data[i].foods.dislikes.length;j++){
            if(j==0){
                htmlString += data[i].foods.dislikes[j];
            }else{
                htmlString +=" and "+ data[i].foods.dislikes[j];
            }
            
        }

        htmlString +=".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend',htmlString);
}