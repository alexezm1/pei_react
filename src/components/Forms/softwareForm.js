import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


class softwareForm extends Component {
    constructor(props){
        super(props)
    }

    

    render() {
        return (
            <form>
            <div class="form-group">
              <label for="exampleInputSW">Nombre del Software</label>
              <input type="text" class="form-control" id="exampleInputSW" aria-describedby="SWHelp" placeholder="">
              </input>
            </div>
            <div class="form-group">
              <label for="exampleInputSW">Enfoque del software</label>
              <input type="text" class="form-control" id="exampleInputSW" aria-describedby="SWHelp" placeholder="ej. Diseño de paginas web, Entorno de Desarrollo, etc">
              </input>
            </div>
            <div class="form-group">
              <label for="exampleInputSW">Licencia</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                </input>
                <label class="form-check-label" for="exampleRadios1">
                Si
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                </input>
                <label class="form-check-label" for="exampleRadios2">
                No
                </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>



        );
    };

};

export default softwareForm;