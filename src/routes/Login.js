import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../components/css/Login.css";
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  onSubmit = (e) =>{
    e.preventDefault();
    let json = {
      email:this.state.email,
      password:this.state.password,
      token:this.state.token
    }
    axios.post("https://bdrivka.herokuapp.com/login", json).then(success =>{ 
      
      var date = new Date();
      var days = days || 365;
      date.setTime(+ date + (days * 24*60*60*90));
      if(success.data.ok){
                  document.cookie=`token=${success.data.token}; expires=${date.toGMTString()}; path=/";`;
                  window.location.href="/home";
                }
                //alert('Login exitoso')
                
                
            })
            .catch(err =>{
                console.log(err)
                alert("Lo siento existe un problema")
            })
  }

  render() {
    return (
      <div className="Login">
        <form action="" onSubmit={this.onSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
