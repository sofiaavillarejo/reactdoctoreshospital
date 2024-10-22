//componente para añadir nuevos hospitales
import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class CreateHospital extends Component {
  cajaId = React.createRef();
  cajaDireccion = React.createRef();
  cajaNombre = React.createRef();
  cajaTelefono = React.createRef();
  cajaCamas = React.createRef();

  state = {
    mensaje: "",
    status: false //para ver el estado de cuando se ha creado el hospital y usar navigate
  }

  insertHospital = (e) =>{
    e.preventDefault();
    console.log("click");
    var request = "webresources/hospitales/post";
    let url = Global.apiHospitales + request;
    //todo: Debemos respetar los tipos de datos del servicio (string, integer)
    let id = parseInt(this.cajaId.current.value);
    let direccion = this.cajaDireccion.current.value;
    let nombre = this.cajaNombre.current.value;
    let telefono = this.cajaTelefono.current.value;
    let camas = parseInt(this.cajaCamas.current.value);
    //NECESITAMOS UN OBJETO REACT CON EL MISMO NOMBRE DE PROPIEDADES QUE EL SERVICIO
    let hospital = {
      //!escribir las variables de la misma forma para que no de error, por si acaso
      idhospital: id,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      camas: camas
    }

    //insertar el hospital con el metodo post
    axios.post(url, hospital).then(response => {
      console.log(response.data);
      this.setState({
        mensaje: "Hospital insertado correctamente:" + nombre,
        status: true
      })
    })
  }


  render() {
    return (
      <div>
        {/* Si el hospital ha sido insertado, nos redirige a la pagina de la tabla hospitales */}
        {this.state.status == true && (
          <Navigate to="/hospitales" />
        )}
        <h1>New Hospital</h1>
        <h2>{this.state.mensaje}</h2>
        <form>
          <label>Introduce id</label>
          <input type='text' ref={this.cajaId} className='form-control' style={{width:"50%"}}/><br/>
          <label>Introduce Nombre</label>
          <input type='text' ref={this.cajaNombre} className='form-control' style={{width:"50%"}}/><br/>
          <label>Introduce Direccion</label>
          <input type='text' ref={this.cajaDireccion} className='form-control' style={{width:"50%"}}/><br/>
          <label>Introduce Telefono</label>
          <input type='text' ref={this.cajaTelefono} className='form-control' style={{width:"50%"}}/><br/>
          <label>Introduce Número Camas</label>
          <input type='text' ref={this.cajaCamas} className='form-control' style={{width:"50%"}}/><br/>
          <button onClick={this.insertHospital} className='btn btn-info'>Añadir</button>
        </form>
      </div>
    )
  }
}
