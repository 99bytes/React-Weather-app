
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import React, { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({ 
        city:"Wonderland",
        feelslike:24.84,
        temp:23.05,
        tempMin:25.05,
        tempMax:25.06,
        humidity:30,
        weather:"haze",})

        let updateInfo=(result)=>{
            setweatherInfo(result);
        }
    return (<div style={{textAlign:"center"}}>
        <h1>weather app by Ayush</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>)
}