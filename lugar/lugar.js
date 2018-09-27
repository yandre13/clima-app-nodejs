const colors = require('colors')

const axios = require('axios'),
    c = console.log


//Axios.get ejecuta una promesa y manda un request a la url

const getLugarLatLong = async(direccion) => {
    const encondedUrl = encodeURI(direccion)
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }
    let location = response.data.results[0],
        lugar = location.formatted_address,
        latitud = location.geometry.location.lat,
        longitud = location.geometry.location.lng
    return {
        lugar,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLong
}





/* //Fetch
const fetch = require('node-fetch')

const showCity = async lugar => {
    const encodeUrl = encodeURI(lugar)
    const request = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)
    const response = await request
        // console.log(response)
    const responseJson = await response.json()
        // console.log(responseJson)
    if (responseJson.status === 'ZERO_RESULTS') {
        return console.log(`No se encontraron ciudades con ${lugar}`.red)
    }
    const location = responseJson.results[0],
        city = location.formatted_address,
        latitud = location.geometry.location.lat,
        longitud = location.geometry.location.lng,
        responseText = console.log(`Lugar: ${city},\nLatitud: ${latitud},\nLongitud: ${longitud}`.green)
    return responseText
}

module.exports = {
    showCity
} */



// getClima(-12.2532891, -77.18721859999999)