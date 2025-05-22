// function getCountry(url){
//      url=`https://restcountries.com/v3.1/name/France`
//     return fetch(url)
//     .then(function(response){
//         if(!response.ok){
//             console.log(`FAILED ${response.status}`)
//         }else{
//             return response.json()
//         }
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }
// getCountry(`https://restcountries.com/v3.1/name/France`)
//     .then(function(result){
//         // country=result[0].name
//         // capital=
//         console.log(result[0].common);
//     })
//     .catch(function(error){
//         console.log(error)
//     })

async function getCountry(countryName){
    const api1=`https://restcountries.com/v3.1/name/${countryName}`
    let countryResponse=await fetch(api1)
        if(!countryResponse.ok){
            throw new Error(`Fetch failed`)
        }
    const countryData=await countryResponse.json()
    const country=countryData[0]
    const [lat,lon]=country.latlng
    const api2=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    const weatherResponse=await fetch(api2)
   const weatherData=await weatherResponse.json()
   return {
    name:country.name.common,
    capital:countryData.capital,
    units:weatherData.current_weather.temperature,
    temperature:weatherData.current_weather_units.temperature
   }
}
getCountry("France")
.then(function(result){
    console.log(
        `Country: ${result.name}
        Capital: ${result.capital}
        Current Temperature: ${result.units}${result.temperature}`
    )
})
.catch(function(error){
    console.log(error)
})