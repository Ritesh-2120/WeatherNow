import { useState } from 'react';
import SearchBox from './searchBox.jsx';
import InfoBox from './infoBox.jsx';

export default function weatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Varanasi",
        feelsLike:25.45,
        humidity: 71,
        tempMax: 25.04,
        tempMin: 25.04,
        temperature: 25.04,
        weather: "clear sky"
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
      <>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </>
    )
  }
  