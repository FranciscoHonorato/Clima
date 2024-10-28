import { useState } from "react"
import './City.css'

function toCelsius(kelvin) {
   const celsius = Math.round(kelvin - 273)
   return celsius
}


export default function City({ city }) {
   if (city.cod !== 200)
      return

   return (
      <>

         <h3>{city.name}, {city.sys.country}</h3>
         <div className="content">
            <img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`} alt="" />
            <div className="temp">{toCelsius(city.main.temp)}°C</div>
         </div>
         <p>{city.weather[0].description}</p>

      </>
   )

}


