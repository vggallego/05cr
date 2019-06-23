import React from 'react';

const Clima = ({resultado}) => {
    console.log(resultado);
    // Extaer los valores

    const { name, main } = resultado;

    if (!name) return null;

    // restar grados kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                { Math.round(main.temp - kelvin) } <span>&#x2103;</span>
                </p>
                <p>Temperatura Maxima: {Math.round(main.temp_max - kelvin)} &#x2103;</p>
                <p>Temperatura Minima: {Math.round(main.temp_min - kelvin)} &#x2103;</p>
            </div>
        </div>
     );
}
 
export default Clima;