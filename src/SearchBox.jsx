
import React ,{useState} from "react";
import InfoBox from "./infoBox";
import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
export default function SearchBox({updateInfo}){
        const API_URL= "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY="df58315ead2e3ff200567a9388be2dd7";
   

     let getWeatherInfo = async()=>{
        try{
             let res= await  axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        //  console.log(res.data);
          let result={
            city:city,
            temp:res.data.main.temp,
            tempMin:res.data.main.temp_min,
            tempMax:res.data.main.temp_max,
            humidity:res.data.main.humidity,
            feelsLike:res.data.main.feels_like,
            weather:res.data.weather[0].description,
          };
          console.log(result);
          return result;
        }
        catch(err){
            throw err;
            console.log("Error in api calling");
        }
        
        };
       
   
   
       
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=async(evt)=>{
        try{
             evt.preventDefault();
        console.log(city);
      let newinfo= await getWeatherInfo();
      updateInfo(newinfo);
        setCity("");
    }
       
     catch(err){
        setError(true);
     }
        
    }

    return (<div  className="SearchBox">
       <h3> Search for the weather </h3>
       <form onSubmit={handleSubmit}>
         <TextField id="city"
          label="City Name" 
          variant="standard"
           required
           value={city}
          onChange={handleChange}  />
         <br></br>
         <br></br>
          <Button variant="contained" type='submit'>Search</Button>
          {error && <p>NO such place exist</p>}
       </form>
       
    </div>)
}