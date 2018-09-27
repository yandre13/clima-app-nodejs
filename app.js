//Axios
// const axios = require('axios')

// para no necesitar un comando y solo un alias se usa options


// const { showCity } = require('./lugar/lugar') (Fetch)
const { getLugarLatLong } = require('./lugar/lugar')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true
    }
}).help().argv
const { getClima } = require('./clima/clima')


const comando = argv.d,
    c = console.log

// console.log(argv)
// console.log(comando)
// try {

//     getLugarLatLong(comando).then(obj => getClima(obj)).catch(error => c(` ${error}`))
// } catch (error) {
//     c(`Error: ${error}`)
// }

const getInfo = async(comand) => {
    try {
        const coors = await getLugarLatLong(comand)
        const clima = await getClima(coors)
        return clima
    } catch (error) {
        c(`${error}`)
    }
}

getInfo(comando)


/* const solicitarClima = async lugar => {
let url = `${'sdfsfdfs'}${lugar}`
const request = fetch(url)
const response = await request
if (response.status === 200) {
    const responseJson = response.json()
    console.log(responseJson.data)
}
} */