import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const app=express();
const PORT=process.env.PORT || 3000;
const API_KEY=process.env.OPENWEATHER_API_KEY;

app.use(express.json());

app.get("/api/weather",async(req,res)=>{
    const {city}=req.query;
    if(!city){
        return res.status(400).json({error:"Please provide a city name in the query parameter. For Example:London"});
    }
    try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        const response=await axios.get(url);
        const data=response.data;
        const cleanWeatherData={
            city:data.name,
            country:data.sys.country,
            temperature:`${data.main.temp}°C`,
            feelsLike: `${data.main.feels_like}°C`,
            humidity: `${data.main.humidity}%`,
            condition: data.weather[0].description,
            windSpeed: `${data.wind.speed} m/s`
        };
        return res.json(cleanWeatherData);
    }
    catch(error){
        if(error.response){
            return res.status(error.response.status).json({
                error:error.response.data.message || "Failed to fetch the weather data"
            });
        }
        return res.status(500).json({error:"Internal Server Error"});
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on the http://localhost:${PORT}`);
})