const axios = require('axios'),
    colors = require('colors')

const getClima = async(obj) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${obj.latitud}&lon=${obj.longitud}&units=metric&appid=cae2a77b91f6d6fd095138ecc949db86`

    let response = await axios.get(url)

    console.log(`La temperatura en ${obj.lugar} es: ${response.data.main.temp}`.rainbow)
}

module.exports = {
    getClima
}