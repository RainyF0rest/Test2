async function getWeather()
{
    //download API , tansform into Json 
    const WEATHER = await fetch('https://api.open-meteo.com/v1/forecast?latitude=22.28&longitude=114.17&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,rain,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_probability_max&timezone=auto')
    const Json = await WEATHER.json()
    console.log(Json);

    //variable assign

    //timeoption
    const options = {
                        weekday: "long",
                        day : "numeric",
                        month : "numeric",
                        year : "numeric"
                    }
    const hrOption = {
                        hour : "numeric",
                        minute : "numeric"
                    }
    const today = Json.daily.time[0];
    const now = new Date;

    //time 
    document.getElementById("curTime").innerHTML = new Date(today).toLocaleString ( 'en-US' , options);   
    document.getElementById("curHour").innerHTML = new Date(now).toLocaleString ( 'en-US' , hrOption);
    
    document.getElementById("zone").innerHTML = Json.timezone;  
    
    


}

getWeather();