import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


class clienteForm extends Component {
    constructor(props){
        super(props)
    }

    

    render() {
        return (
            <form>
            <div class="form-group">
              <label for="exampleInputName1">Nombre del Cliente</label>
              <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name">
              </input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>



        );
    };

};

export default clienteForm;