async function getCountry(countryName){
     url1=`https://restcountries.com/v3.1/name/${countryName}`
    
    const countryResponse= await fetch(url1)
    if(!countryResponse.ok){
            throw new Error(`Fetch failed`)
        }
    const countryData= await countryResponse.json()
    let country=countryData[0]
    const name=country.name.common
    const capital=country.capital[0]
    const lat=country.latlng[0]
    const lon=country.latlng[1]
    const weatherResponse= await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    const weatherData= await weatherResponse.json()
    const units=weatherData.current_weather.temperature
    const temperature=weatherData.current_weather_units.temperature
    return {
        name,
        capital,
        temperature,
        units
    }
}
getCountry("France")
    .then(function(result){
    console.log( ` Country: ${result.name}
        Capital:${result.capital}
        Temperature:${result.units}${result.temperature}`)
    })
    .catch(function(error){
        console.log(error)
    })

// async function getCountry(countryName){
//     const api1=`https://restcountries.com/v3.1/name/${countryName}`
//     let countryResponse=await fetch(api1)
//         if(!countryResponse.ok){
//             throw new Error(`Fetch failed`)
//         }
//     const countryData=await countryResponse.json()
//     const country=countryData[0]
//     const [lat,lon]=country.latlng
//     const api2=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
//     const weatherResponse=await fetch(api2)
//    const weatherData=await weatherResponse.json()
//    return {
//     name:country.name.common,
//     capital:countryData.capital,
//     units:weatherData.current_weather.temperature,
//     temperature:weatherData.current_weather_units.temperature
//    }
// }
// getCountry("France")
// .then(function(result){
//     console.log(
//         `Country: ${result.name}
//         Capital: ${result.capital}
//         Current Temperature: ${result.units}${result.temperature}`
//     )
// })
// .catch(function(error){
//     console.log(error)
// })