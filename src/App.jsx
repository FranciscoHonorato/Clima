import { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5"
import { PiSignatureDuotone } from "react-icons/pi";
import City from "./components/City"
import './App.css'


function App() {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState({})


  const apiKey = '0386d62a38c983363e6df2b902844713'
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`
 

  async function sendCity() {
    try {
      const res = await fetch(apiUrl)
      const data = await res.json()

      setCity(data)
      console.log(data.cod)
    } catch (error) {
      console.log('erro: ', error)
    }


  }



  return (
    <>
      <div className='card'>
        <h1>Clima <PiSignatureDuotone /></h1>
     
        <div className='search'>
          <input onChange={(e) => setSearch(e.target.value)} />
          <button onClick={sendCity}>
            <IoSearch />
          </button>
        </div>
       
        <City city={city} />
      </div>
    </>
  )

}

export default App

