var allData={};
var url="https://data.covid19india.org/data.json";

function searchByState(){
    let url="https://data.covid19india.org/data.json";
    fetch(url).then((res)=>res.json()).then(response => {
        console.log(response);
        if (response){
        allData= response ;
        console.log(allData.statewise)
        displaystateNames(allData.statewise)
        }
     } )
     
}


// function searchByState(){
//   var getdetails = new XMLHttpRequest();
//   getdetails.onreadystatechange = function(){
//     if(getdetails.readyState == 4 && getdetails.status == 200){
//         allData= JSON.parse(getdetails.response);
//         console.log(allData)
//         displaystateNames(allData.statewise  )
//     }
//   }
//   getdetails.open("GET",url);
//   getdetails.send();
// }
// console.log(allData)
// function displaystateNames(statewiseDetails){
//     // document.querySelector("ul").innerHTML="";
//     statewiseDetails.forEach((cvdst,i)=>{
//         if(statewiseDetails.state != "Total"){           
//                 myli = document.createElement("li");
//                 myli.innerHTML = cvdst.state
//                 document.querySelector("ul").appendChild(myli);
            
//         }
//     })

// }

function displaystateNames(statewiseDetails){
    document.querySelector("ul").innerHTML ="";
    statewiseDetails.map((cvdst,i)=>{
        if (cvdst.state !="Total"){
            myLi = document.createElement("li");
            myLi.innerHTML =  cvdst.state;
            myLi.setAttribute("onclick","showStateDetails("+i+")");  
            document.querySelector("ul").appendChild(myLi);
        }
    })
}

searchByState()