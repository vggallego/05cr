import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {

  //Stage principal
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({})

  useEffect(() => {
    //Prevenir ejecucion
    if (ciudad === '') return;
    const consultarAPI = async () => {

      const appId = 'a28ff5c0cf881230567fb5ac04e28182';
  
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
  
      // Cosultar url
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
  
      guardarResultado(resultado);
    }
    consultarAPI();
  }, [ciudad, pais]);

  const datosConsulta = datos => {
    // Validar ambos campos estan

    if (datos.pais === '' || datos.ciudad === '') {
      //error
      guardarError(true);
      return;
    } 

    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  // Cargar un componente Condicionalmente
  let componente;
  if (error) {
    // Hay un error mostrar 
    componente = <Error mensaje='Ambos campos son obligatorios' />
  } else if (resultado.cod === "404") {
    componente = <Error mensaje="La ciudad no existe en nuestro registro" />
  } else {
    // Mostrar el clima
    componente = <Clima 
      resultado = {resultado}
    />;
  }

	return (
		<div className="App">
			<Header titulo="Clima React App" />
			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<Formulario 
                datosConsulta={datosConsulta}
              />
						</div>
            <div className="col s12 m6">
              {componente}
            </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
