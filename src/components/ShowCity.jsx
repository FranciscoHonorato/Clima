import { useState } from "react"
import { IoSearch } from "react-icons/io5"

export default function ShowCity() {
    const [search, setSearch] = useState('')
    const [city, setCity] = useState({})


    const apiKey = '0386d62a38c983363e6df2b902844713'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`
    

    

    async function sendCity(){
        try {
            const res = await fetch(apiUrl)
            const data = await res.json()
             
            setCity(data)
             console.log(data)
        } catch (error) {
            console.log('erro: ',error)
        }
     
    
    }

    function temperatura(f){
        const c = Math.round(f - 273.15)
        return c
    } 

    return (
        <>
            <h1>tempo</h1>

            <input onChange={(e) => setSearch(e.target.value)} />
            <button onClick={sendCity}>
                <IoSearch />
            </button>
            <hr />
            <label htmlFor="">
              {city.name}
              <br />
              {temperatura(city.main.temp)} °C
              
            </label>
        </>
    )

}

