import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./infoBox.css";

export default function InfoBox({info}){
    const INIT_URL=
    "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1457269449834-928af64c684d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
    
    return(
        <div className="InfoBox">
       <br></br>
    <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp={info.tempMin}</p>
            <p>Max Temp= {info.tempMax}</p>
            <p>The weather can be described as {info.weather} and feels like {info.feelslike}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
</div>
        </div>
        
    )
}