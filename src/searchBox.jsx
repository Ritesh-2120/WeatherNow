import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState(""); 
    let [error, setError] = useState(false); 
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "63593d8194b970d75bfe3c8d189c5e66";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found"); // Handle invalid city input
            }
            let jsonResponse = await response.json();
            let result = {
                "city": jsonResponse.name,
                "weather": jsonResponse.weather[0].description,
                "temperature": jsonResponse.main.temp,
                humidity : jsonResponse.main.humidity,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                feelsLike : jsonResponse.main.feels_like,
            };
            return result;
        }catch(err){
            console.error("Error fetching weather data:", err.message);
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };
    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            setError(false);
            setCity("");
            let newinfo = await getWeatherInfo();
            console.log(newinfo);
            updateInfo(newinfo);
        }catch{
            setError(true);
        }
    };

    return (
        <div>
            <h3>Check your City&apos;s weather now!</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/>
            <br />
            <Button variant="contained" type="submit" >Search</Button>
            <br />
            {error && <p style={{color: "red",  marginTop: "0px" }}>No Such place in DB</p>}
            </form>
        </div>
    );
}