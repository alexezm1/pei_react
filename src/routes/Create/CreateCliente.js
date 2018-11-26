import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import '../../App.css'
import axios from 'axios';



class CreateCliente extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            name:undefined
        }
        // this.onInputChange = this.onInputChange.bind(this)
    };

    onInputChange = (e) => {
        if(e.target.name ==='name'){
            this.setState({
                name: e.target.value
            })
        }
    }

    onSubmit= (e) =>{
        if(this.state.name === undefined){
            alert("Ingresa el nombre")
        } 
        else{
            let json = {
                name:this.state.name

            }
            axios.post("https://bdrivka.herokuapp.com/cliente", json).then(cliente =>{ 
                console.log(cliente)
                alert('cliente creado')
            })
            .catch(err =>{
                console.log(err)
                alert("Lo siento existe un problema")
            })
        } 
    }

    render(){
        return(
            <div ClassName ="App">
            <NavBar/>
            <Header/>
            
            <div id="section">

                <h1>Nuevo Cliente</h1>

                <form onSubmit = {this.onSubmit}>
            <div class="form-group">
              <label for="exampleInputName1">Nombre del Cliente</label>
              <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Ingresa el nombre del cliente" onChange = {this.onInputChange}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

            </div>

            <Footer/>
            </div>
        )
    }
}

export default CreateCliente;