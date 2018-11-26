import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


class proyectoForm extends Component {
    constructor(props){
        super(props)
    }

    

    render() {
        return (
            <form>
            <div class="form-group">
              <label for="exampleInputNP">Clasificacion</label>
              <input type="text" class="form-control" id="exampleInputNP" aria-describedby="NPHelp" placeholder="ej. Aplicacion Movil, Pagina Web, etc">
              </input>
            </div>
            <div class="form-group">
              <label for="exampleInputcli">Cliente</label>
              <input type="text" class="form-control" id="exampleInputcli" aria-describedby="cliHelp" placeholder="">
              </input>
            </div>
            <div class="form-group">
                <label for="exampleInputEmpl">Empleados</label>
                <input type="text" class="form-control" id="exampleInputEmpl" aria-describedby="EmplHelp" placeholder="Ingrese los empleados que estan trabajando en el proyecto">
                </input>
            </div>
            <div class="form-group">
                <label for="exampleInputFI">Fecha de Inicio</label>
                <input type="date" class="form-control" id="exampleInputFI" aria-describedby="FIHelp" placeholder="">
                </input>
            </div>
            <div class="form-group">
                <label for="exampleInputFF">Fecha de Entrega</label>
                <input type="date" class="form-control" id="exampleInputFF" aria-describedby="FFHelp" placeholder="">
                </input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>



        );
    };

};

export default proyectoForm;