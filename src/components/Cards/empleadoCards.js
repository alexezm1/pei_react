import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


class empleadoCard extends Component {
    constructor(props){
        super(props)
    }

    

    render() {
        return (
        
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">{this.props.name}</div>
                <div class="card-body">
                <h5 class="card-title">{this.props.enfoque}</h5>
                <Link to={"/hardware/" + this.props.uid}><button className="btn btn-primary">Ver detalles</button></Link>
                </div>
            </div>



        );
    };

};

export default empleadoCard;