import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import Spinner from './components/Spinner';
import { useEffect, useState } from 'react';
import { Route , Routes , NavLink} from 'react-router-dom';
import ColorPicker from './components/ColorPicker';
import NavBar from './components/NavBar';

function App() {
  const API_KEY = "ab6b322497fdbb5991fa82137f56c11c" ;
  const [weatherData , setWeatherData] = useState("");
  const [loading ,setLoading] = useState(false);
  const city = "Bokaro"
  // let data ;
  
  async function fetchWeatherData(city){
    try{
      setLoading(true);
      // const newUrl = url ;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      const result = await fetch(url);
      const output = await result.json() ;
      console.log(output);
      setWeatherData({
         temp : output.main.temp ,
         humidity : output.main.humidity ,
         wind : output.wind.speed , 
         city : output.name
        });
        setLoading(false);
      // console.log("inside api")
      // data = weatherData ;
    }
    catch(e){
      setWeatherData("");
      alert(e);
      setLoading(false);
    }
    // console.log(weatherData.main.humidity);
  }

  useEffect(()=>{
    fetchWeatherData(city);
  },[])

  return (
    <div className="App  bg-slate-400 ">

      <NavBar/>
      
        <Routes>
          <Route path = "/" element = {<Weather weatherData = {weatherData} fetchWeatherData = {fetchWeatherData} loading = {loading}/>}/>
          <Route path = "/color-picker" element = {<ColorPicker/>}/>
        </Routes>
    </div>
  );
}

export default App;
