import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import CreateEmpleado from './routes/Create/CreateEmpleado'
import './App.css';
import CreateHardware from './routes/Create/createHardware';
import CreateCliente from './routes/Create/CreateCliente';
import CreateSoftware from './routes/Create/CreateSoftware';
import CreateProyecto from './routes/Create/CreateProyecto';
import GetHardware from './routes/Get/GetHardware';
import Login from './routes/Login';
import Home from './routes/Home';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isAuthenticated: false
    }
  }

  isAuthenticated = function(){
    let token = this.data.getTokenCookie("token");
    if(token!=""){
      axios.get('https://bdrivka.herokuapp.com/auth', token).then((success)=>{
        if(success.data.ok)
                  if(document.URL.indexOf("login")>=0){
                    window.location.href='/home'; 
                  }
        
      }).catch((e)=>{
        if(!e.data.ok && document.URL.indexOf("login")<0)
          window.location.href = '/login';
      });
    }else if(document.URL.indexOf("login")<0){
    window.location.href = '/login';
    }
  }

  render() {
    
    
    return (

     
      <BrowserRouter>
        <main>
          <Route exact path = '/hardware' component ={GetHardware}/>
          
          <Route exact path = '/create_empleado' component ={CreateEmpleado}/>
          <Route exact path = '/create_hardware' component ={CreateHardware}/>
          <Route exact path = '/create_cliente' component ={CreateCliente}/>
          <Route exact path = '/create_software' component ={CreateSoftware}/>
          <Route exact path = '/create_proyecto' component ={CreateProyecto}/>
          <Route exact path = '/login' component ={Login}/>
          <Route exact path = '/home' component ={Home}/>
          
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
