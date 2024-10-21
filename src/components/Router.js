import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import MenuHospitales from './MenuHospitales';
import Home from './Home';
import Doctores from './Doctores';

export default class Router extends Component {
  render() {
    function CapturarDoctoresId () {
      //funcion para captar el id enviado por link
      var {idhospital} = useParams();
      return <Doctores idhospital={idhospital} /> //devolvemos los doctores con el props ya incluido
    }
    return (
      <BrowserRouter>
        <MenuHospitales/>
        <Routes>
          <Route path='/' element={<Doctores idhospital="33"/>}></Route>
          <Route path='/doctores/:idhospital' element={<CapturarDoctoresId/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
