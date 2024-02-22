import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios'
import BasicLineChart from './Components/BasicLineChart';

function App() {
  let [data,setData] = useState()
  useEffect(()=>{
    axios.get("http://api.open-meteo.com/v1/forecast?latitude=32.73&longitude=-97.10&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m").then((response)=>{
      console.log(response.data)
      setData(response.data)
    })
  },[]);

  return (
    <div className="App">
      <header className="App-header">
      <h3>{data?data.current.temperature_2m:''} {data?data.current_units.temperature_2m:''}</h3>
      <h3>{data?data.current.temperature_2m:''} {data?data.current_units.temperature_2m:''}</h3>
      <BasicLineChart data={data?data.hourly.temperature_2m:[]} time={data?data.hourly.time:[]}></BasicLineChart>
      </header>
    </div>
  );
}

export default App;
