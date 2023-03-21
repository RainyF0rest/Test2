//clock update continguosly
setInterval( getTime, 1000 ) ;
function getTime()
{
    const ckOption = {
                        hour : "numeric",
                        minute : "numeric",
                        second : "numeric"
                    }


    let timeNow = new Date;
    document.getElementById("curHour").innerHTML = new Date(timeNow).toLocaleString ( 'en-US' , ckOption);    
}


setInterval( getWeather, 300000 ) ;
async function getWeather()
{
    //download API , tansform into Json 
    const WEATHER = await fetch('https://api.open-meteo.com/v1/forecast?latitude=22.28&longitude=114.17&hourly=temperature_2m,precipitation_probability,weathercode,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&timezone=auto')
    const Json = await WEATHER.json()
    console.log(Json);

    //variable assign
    //units
    const cel = Json.hourly_units.temperature_2m ;
    const pbb = Json.hourly_units.precipitation_probability ;

   //weather data
    const cur_uv = Json.hourly.uv_index[0] ;
    const cur_tem = Json.hourly.temperature_2m[0] ;
    const wmo = Json.hourly.weathercode[0] ;

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

    const sunset = new Date(Json.daily.sunset[0]).toLocaleString ( 'en-US' ,  hrOption);
    const sunrise =  new Date(Json.daily.sunrise[0]).toLocaleString ( 'en-US' ,  hrOption);    
    const length =  Json.daily.temperature_2m_min.length ;
    //time 
    document.getElementById("curTime").innerHTML = new Date(today).toLocaleString ( 'en-US' , options);   
    document.getElementById("zone").innerHTML = Json.timezone;  
    document.getElementById("today").innerHTML = `<div>${cur_tem} ${ cel }</div>
                                                <div>UV Index ${cur_uv}</div>
                                                <div><img src= "">${sunrise} <img src= "">${sunset} </div>`



}

function getSixDay()
{
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

    let text = "";
    for (let i = 0; i < cars.length; i++) {
      text += cars[i] + "<br>";
    }
    document.getElementById("6days").innerHTML = text;
    console.log(result)     
};

/* 

`<div><p>${}${cel}</p> - <p>${}${cel}</p><p>${pub}</p></div>`

 let min_tem = Json.daily.temperature_2m_min[ i ] ;
 let max_tem = Json.daily.temperature_2m_max[ i ] ;
 const length =  Json.daily.temperature_2m_min.length ;

 for (let i = 0 , i < length)
{
	result += `<div><p>${Json.daily.temperature_2m_min[ i ]}${cel}</p> - <p>${Json.daily.temperature_2m_max[ i ]}${cel}</p><p>${pub}</p></div>`
}



${Json.daily.temperature_2m_min[i]}${cel}
${Json.daily.temperature_2m_max[ i ]}${cel}
${pub}
`<div><p>123</p> - <p>123</p><p></p></div>`
*/


getTime();
getWeather();
getSixDay();