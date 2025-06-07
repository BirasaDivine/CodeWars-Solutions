async function getCountry(){
    let country="France"
    let firstUrl=`https://restcountries.com/v3.1/name/${country}`
    const countryResponse= await fetch(firstUrl)
    if(!countryResponse.ok) throw new Error("Fetch Failed")
    const countryData= await countryResponse.json()
    const countries=countryData[0]
    const [lat,lon]=countries.latlng
    let secondUrl=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    let weatherResponse= await fetch(secondUrl)
    if(!weatherResponse.ok) throw new Error("Fetch Failed")
    let weatherData= await weatherResponse.json()
    const celsius=weatherData.current_weather_units.temperature
    const temperature=weatherData.current_weather.temperature
    const currentTemperature=`${temperature}${celsius}`
    return {
            country: countries.name.common,
            currentTemperature:currentTemperature
        };
}
getCountry()
    .then(data =>{
        console.log(data)
        
    })
    .catch(error =>{
        console.log(error)
    })