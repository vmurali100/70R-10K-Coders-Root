import React, {useState} from 'react'
import './App.css';

function App() {
  const [city, setcity] = useState("")
  const [result, setresult] =  useState("")
  const changeHandler = e =>{
    setcity(e.target.value);
  }

  const submitHandler = e =>{
     e.preventDefault(); //any action which are pnding we are preventing here
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      res=>res.json()
    ).then(data => {
      const kelvin = data.main.temp;
      const celsius = kelvin - 273.15 // to convert kelvin to celsius
      setresult("Temperature at"+" "+city+" \n"+Math.round(celsius)+"°C") //it will covert decimal value to round integer value
      setcity("");
    }) //temp variable name
    //\n escape corrector-it will print in new line
   
    console.log(city)
  }
  return (
    <div>
      <center>
       <div className= "card">
          <div className = "card-body">
            <h4 className="card-title">Weather App</h4>
              <form onSubmit={submitHandler}>
                <input type="text" name="city" value={city} onChange={changeHandler}/> <br/><br/>
                <input type="submit" value="Get Temperature"/>

              </form>
              <h1>{result}</h1>
          </div>
       </div>
      </center>
      
    </div>
  );
}

export default App;
