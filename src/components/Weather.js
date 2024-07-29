import React, { useState } from 'react'
import clearWeather from '../assests/clear.png' ;
import cloudWeather from '../assests/cloud.png' ;
import drizzleWeather from '../assests/drizzle.png' ;
import snowWeather from '../assests/snow.png' ;
import rainWeather from '../assests/rain.png' ;
import humidityIcon from '../assests/humidity.png' ;
import searchIcon from '../assests/search.png' ;
import windIcon from '../assests/wind.png' ;
import Spinner from './Spinner';

const Weather = (props) => {
  const [location , setLocation] = useState("");
  const weatherData = props.weatherData ;
  const fetchWeatherData = props.fetchWeatherData ;
  const loading = props.loading ;

  console.log(weatherData);

  return (
    <div className='bg-blue-400 px-[20px] py-[20px] flex flex-col items-center justify-center max-w-[450px] mx-auto rounded-2xl mt-[140px] '>

      <div className='flex gap-x-5'>
            <input type = "text" placeholder= 'ENTER CITY NAME' onChange = {e=>setLocation(e.target.value)} value = {location} className = "px-[8px] py-[4px] bg-black text-white ml-[20px] rounded-md" />
            <div>
                <img src = {searchIcon} loading = "lazy" onClick={()=>fetchWeatherData(location)} className='p-2 bg-red-200 rounded-full'/>
            </div> 
        </div>

      {loading ? (<Spinner/>) : (<div>
        <div className='mb-[-20px] mt-[10px] text-center text-2xl text-white font-semibold'> {weatherData.city} </div>

        <div className='flex flex-col items-center justify-center'>
        <img src = {clearWeather} className = 'max-h-[180px] select-none'/>
        <p className='text-2xl font-bold mt-[-8px]'>{weatherData.temp} °C</p>
        </div>

        <div className='flex gap-x-6 w-full mt-[12px] '>
          <div className='flex gap-x-2'>
            <img src = {windIcon} loading = "lazy" className = 'h-[40px]'/>
            <p className='text-[14px] mt-[8px] font-semibold text-center'>{weatherData.wind}Km/h</p>
          </div>

          <div className='flex gap-x-2'>
              <img src = {humidityIcon} loading = "lazy" className = 'h-[30px]'/>
              <p className='text-[14px] mt-[8px] font-semibold text-center'>{weatherData.humidity} %</p>
          </div>
        </div>
      </div>)}
        

        
        
    </div>
  )
}

export default Weather ;
