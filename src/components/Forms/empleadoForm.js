import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


class empleadoForm extends Component {
    constructor(props){
        super(props)
    }

    

    render() {
        return (
            <form>
            <div class="form-group">
              <label for="exampleInputName1">Nombre completo</label>
              <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name">
              </input>
            </div>
            <div class="form-group">
              <label for="exampleInputLenguajes">Lenguajes de programacion</label>
              <input type="text" class="form-control" id="exampleInputLenguajes" aria-describedby="LenguajesHelp" placeholder="Escriba los lenguajes de programacion que domina separados por coma">
              </input>
            </div>
            <div class="form-group">
                <label for="exampleInputEnfoque">Enfoque</label>
                <input type="text" class="form-control" id="exampleInputEnfoque" aria-describedby="enfoqueHelp" placeholder="ej. Diseñador, Desarrollador Web, Desarrollador de Apps moviles, etc">
                </input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>



        );
    };

};

export default empleadoForm;