import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../components/css/Login.css";
import axios from 'axios';
import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);

  }
  
  


  render() {
    return (
        <div>

            <Navbar/>
            <Header/>
                <h1>Bienvenido!</h1>
            <Footer/>
        </div>
    );
  }
}
