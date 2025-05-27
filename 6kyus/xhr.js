const {XMLHttpRequest}= require ("xmlhttprequest")
const xhr= new XMLHttpRequest()
xhr.open('GET',`https://restcountries.com/v3.1/name/${countryName}`,true)
xhr.onload()