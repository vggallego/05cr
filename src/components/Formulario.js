import React, { useState } from 'react';

const Formulario = ({datosConsulta}) => {


    // state del Componente
    // busqueda = state, guardarBusqueda = this.setState({})
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const handleChange = e => {
        //Cambiar state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });

        console.log(busqueda);
    }

    const consultarClima = e => {
        e.preventDefault();
        //Pasar la busqueda del usuario al componente principal
        datosConsulta(busqueda)
    }


    return ( 
        <form
            onSubmit={consultarClima}
        >
            <div className="input-field col s12">
                <input 
                    type="text" 
                    id="ciudad"
                    name="ciudad"
                    onChange={handleChange}/>
                <label htmlFor="ciudad">Ciudad</label>
            </div>

            <div className="input-field col s12">
                <select name="pais" id="pais" onChange={handleChange}>
                    <option value="">Selecciona un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="ES">España</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="MX">Mexico</option>
                    <option value="PE">Peru</option>
                </select>
            </div>

            <div className="input-field col s12">
                <input type="submit" 
                value="Buscar clima" 
                className="waves-effect waves-light btn-large btn-block yellow accent-4"/>
            </div>
            
        </form>
     );
}       
 
export default Formulario;