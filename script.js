


if(data.weather{0}.main == "Clouds"){
    weatherIcon.src = "clouds.png";
}
else if(data.weather{0}.main == "Clear"){
    weatherIcon.src = "clear.png";
}
else if(data.weather{0}.main == "Rain"){
    weatherIcon.src = "rain.png";
}
else if(data.weather{0}.main == "Drizzle"){
    weatherIcon.src = "drizzle.png";
}
else if(data.weather{0}.main == "Mist"){
    weatherIcon.src = "mist.png";
}