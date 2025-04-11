import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import './infoBox.css';

export default function InfoBox({info}){
    const RAIN_URL = "https://images.unsplash.com/photo-1563389843516-4a7b39dce10d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1546274527-9327167dc1f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1603726574752-a85dc808deab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temperature > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}&nbsp;{info.humidity > 80 ? <ThunderstormIcon/> : info.temperature > 15 ? <WbSunnyIcon/> : <AirIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"} >
            <div>Temprature = {info.temperature}&deg;C</div>
            <div>Humidity = {info.humidity}</div>
            <div>TempMax = {info.tempMax}&deg;C</div>
            <div>TempMin = {info.tempMin}&deg;C</div>
            <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}