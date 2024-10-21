import React, { Component } from 'react'

export default class DetallesDoctor extends Component {

  render() {
    return (
      <div>
        <h1>Detalles del doctor: {this.props.doctor.idDoctor}</h1>
        <ul>
          <li>{this.props.doctor.apellido}</li>
          <li>{this.props.doctor.salario}</li>
        </ul>
      </div>
    )
  }
}
