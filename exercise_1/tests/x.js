/*function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


const obj = { 
    "x0": {
        "x1": "x2",
        "y1": "y2",
        "w1": {
            "x2": "x3",
            "y2": "y3",
            "w2": "w3"
        }

    },
    "y0": "y1",
    "w0": "w1",


}

const mapa = {
    "0": "x",
    "1": "y",
    "2": "w",
}

const primerPaso = getRandomInt(3)
const dondePisar = mapa[`${primerPaso}`] 
const lugar = obj[`${dondePisar}0`]

if (typeof lugar === "object") {
    console.log("El primer lugar fue:",lugar)
    const segundoLugar = lugar[`${dondePisar}1`]
    if (typeof segundoLugar === "object") {
        console.loge("El segundo lugar fue:",lugar)
        const tercerLugar = segundoLugar[`${dondePisar}`]
        if (typeof tercerLugar === "object"){
            console.log("El ultimo lugar es un object")
        } else if(  typeof tercerLugar === "string"    ) (
            console.log(`El ultimo lugar es un string`)
        )
    } else{
        console.log(`El fin del camino es ${segundoLugar}` )

    }
} else{
    console.log(`El fin del camino fue ${lugar}`)
}*/


const monedas = {
    USD: "$",
    EUR: "€",
    GBP: "£"
  }


  const convertirCentsAMoneda = (centavos, codigoMoneda) => {
    if ( centavos < 0){
        return "Valor invalido"
    }  
    if (!monedas[codigoMoneda] ){
        return "Codigo de moneda invalido"
    }
    const resultado = (centavos / 100).toFixed(2)
    
    return  `${monedas.USD}${resultado}`
    
}

   const convercion = convertirCentsAMoneda(-4000, "GBP" )

   const convercionDos = convertirCentsAMoneda(1000, "EURR")

   const convercionTres = convertirCentsAMoneda(2000, "USD")
   
  console.log(convercion) 
  console.log(convercionDos)
  console.log(convercionTres)
  
  

  
  