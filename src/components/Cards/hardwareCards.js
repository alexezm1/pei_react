import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Card extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    

    render() {
        return (

        <div className="card" style="width: 18rem;">
            <div className="card-body">
              <h5 className="card-title">{this.props.marca}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{this.props.so}</h6>
              <Link to={"/hardware/" + this.props.uid}><button className="btn btn-primary">Ver detalles</button></Link>
            </div>
        </div>



        );
    };

};

export default Card;