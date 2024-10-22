import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import MenuHospitales from './MenuHospitales';
import Home from './Home';
import Doctores from './Doctores';
import CreateHospital from './CreateHospital';
import Hospitales from './Hospitales';

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
          <Route path='/' element={<Home/>}></Route>
          <Route path='/doctores/:idhospital' element={<CapturarDoctoresId/>}/>
          <Route path='/createhospital' element={<CreateHospital/>}/>
          <Route path='/hospitales' element={<Hospitales/>}/>

        </Routes>
      </BrowserRouter>
    )
  }
}
