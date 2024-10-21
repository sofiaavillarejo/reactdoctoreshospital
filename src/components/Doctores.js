import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';
import DetallesDoctor from './DetallesDoctor';

export default class Doctores extends Component {
  state = {
    doctores: [],
    doctorSeleccionado: null
  }

  loadDoctores = () =>{
    var idHospital = this.props.idhospital;
    var request = "api/doctores/doctoreshospital/" + idHospital;
    var url = Global.apiDoctores + request;
    axios.get(url).then(response=> {
      console.log("Leyendo servicio doctores" + response.data);
      this.setState({
        doctores: response.data
      })
    })
  }

  componentDidMount = () => {
    this.loadDoctores();
  }

  componentDidUpdate = (oldProps) =>{
    //jamas llamaremos a nada si no hay aqui un if
    if (this.props.idhospital != oldProps.idhospital){
      this.loadDoctores();
    }
  }

  mostrarDetalles = (doctor) =>{
    this.setState({
      doctorSeleccionado: doctor
    })
  }

  render() {
    return (
      <div>
        <h2>Doctores del hospital: <span style={{color:"red"}}>{this.props.idhospital}</span></h2>
        <table className='table table-bordered' style={{textAlign: "center"}}>
          <thead className='table table-info'>
            <tr>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
              <th>Id hospital</th>
            </tr>
          </thead>
          <tbody className='table table-secondary'>
            {
              this.state.doctores.map((doctor, index) => {
                return (
                  <tr key={index}>
                    {/* en el onclick le paso el metodo con el objeto que lleva todos los datos */}
                    <td>{doctor.apellido} ➡️ <button onClick={ () => this.mostrarDetalles(doctor)}>Detalles</button></td>
                    <td>{doctor.especialidad}</td>
                    <td>{doctor.salario}</td>
                    <td>{doctor.idHospital}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {
          this.state.doctorSeleccionado && (
            <DetallesDoctor doctor={this.state.doctorSeleccionado} />
          )
        }
      </div>
    )
  }
}