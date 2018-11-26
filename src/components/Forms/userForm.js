import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


class userForm extends Component {
    constructor(props){
        super(props)
    }

    

    render() {
        return (
            <form>
            <div class="form-group">
              <label for="exampleInputName1">Nombre</label>
              <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name">
              </input>
            </div>
            <div class="form-group">
              <label for="exampleInputLast_Name1">Apellido</label>
              <input type="text" class="form-control" id="exampleInputLast_Name1" aria-describedby="Last_nameHelp" placeholder="Enter last name">
              </input>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </input>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>



        );
    };

};

export default userForm;