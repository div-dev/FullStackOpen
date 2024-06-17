import { useEffect, useState } from "react"

import axios from "axios"


const App = () =>{
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [userMessage, setUserMessage] = useState('')
  const [filteredCountry , setFilteredCountry] = useState([])
  const [selectedCountry , setSelectedCountry] = useState(null)
  const [weather , setWeather] = useState(null)

  const api_key =import.meta.env.VITE_WEATHER_API_KEY

  useEffect(()=>{
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
          .then(response=>{
            setCountries(response.data)            
          })
          .catch(error=>{
            console.error('error fetching data' ,error)
            setUserMessage('Error fetching data')
          })
  },[])


  const handleChange = (event) =>{
    const target = event.target.value
    setFilter(target)

    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(target.toLowerCase()))
    
    if(filtered.length>10){
      setUserMessage('Too many matches, specify another filter')
      setFilteredCountry([])
      setSelectedCountry(null)
    }else if(filtered.length === 0){
      setUserMessage('No Matches Found')
      setFilteredCountry([])
      setSelectedCountry(null)

    }else{
      setUserMessage('')
      setFilteredCountry(filtered)
    }

    const exactCountry = countries.filter(country => 
      country.name.common.toLowerCase() === target.toLowerCase()
    )

    if(exactCountry.length === 1){
      setSelectedCountry(exactCountry[0])
      getWeather(exactCountry[0].capital)
    }else{
      setSelectedCountry(null)
    }
    
  }


  const handleClick =  (country) => {
    setSelectedCountry(country)
  }

  const getWeather = (capital) =>{
    const url  = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
    axios.get(url)
      .then(response =>{
        setWeather(response.data)
      })
      .catch(error=>{
        console.error('error fetching weather',error)
      })
  }


  const renderCountries = (country) => {
   return ( 
   
    <div key={country.cca3}>
      <h2>{country.name.common}</h2>
      <p>Capital : {country.capital}</p>
      <p>Area : {country.area}</p>
      <h3>Languages: </h3>
      <ul>
            {Object.values(country.languages).map(language => (
              <li key={language}>
                {language}
              </li>
            ))}
      </ul>
      <div>
        <img src={country.flags.png} width="180"/>
      </div>
      {weather && (
        <div>
          <h3>Weather in {country.capital} </h3>
          <p>Temperature : {weather.main.temp} °C</p>
          <p>Weather : {weather.weather[0].description}</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt='Weather icon' width="100"/>
         </div>
      )}
    </div>)
  }

  
  return(
      <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <div>
            Find Countries <input 
              value={filter}
              onChange={handleChange}
            />
          </div>
        </form>
        <div>
          {userMessage && <p>{userMessage}</p>}
          {selectedCountry
            ? renderCountries(selectedCountry)
            : (
              <ul>
                {filteredCountry.map(country =>(
                  <li key={country.cca3}>
                    {country.name.common} <button onClick={() => handleClick(country)}>show</button>
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
  )
}

export default App