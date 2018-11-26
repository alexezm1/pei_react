import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import '../../App.css'
import axios from 'axios';



class CreateEmpleado extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            name:undefined,
            lenguajes:undefined,
            enfoque:undefined
        }
        // this.onInputChange = this.onInputChange.bind(this)
    };

    onInputChange = (e) => {
        if(e.target.name === 'name'){
            this.setState({
                name: e.target.value
            })
        }else if(e.target.name === "lenguajes"){
            this.setState({
                lenguajes: e.target.value
            })
        }else if(e.target.name === "enfoque"){
            this.setState({
                enfoque: e.target.value
            })
        }
    }

    onSubmit= (e) =>{
        if(this.state.name === undefined){
            alert("Ingresa el nombre")
        }
        else if(this.state.lenguajes === undefined){
            alert("Ingresa los lenguajes")
        }
        else if(this.state.enfoque === undefined){
            alert("Ingresa el enfoque")
        } 
        else{
            let json = {
                name:this.state.nombre,
                lenguajes:this.state.lenguajes,
                enfoque:this.state.enfoque

            }
            axios.post("https://bdrivka.herokuapp.com/empleado", json).then(empleado =>{ 
                console.log(empleado)
                alert('empleado creado')
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

                <h1>Nuevo Empleado</h1>

                <form onSubmit = {this.onSubmit}>
            <div class="form-group">
              <label for="exampleInputName1">Nombre completo</label>
              <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name" onChange = {this.onInputChange}/>
              
            </div>
            <div class="form-group">
              <label for="exampleInputLenguajes">Lenguajes de programacion</label>
              <input type="text" class="form-control" id="exampleInputLenguajes" aria-describedby="LenguajesHelp" placeholder="Escriba los lenguajes de programacion que domina separados por coma" onChange = {this.onInputChange}/>
              
            </div>
            <div class="form-group">
                <label for="exampleInputEnfoque">Enfoque</label>
                <input type="text" class="form-control" id="exampleInputEnfoque" aria-describedby="enfoqueHelp" placeholder="ej. Diseñador, Desarrollador Web, Desarrollador de Apps moviles, etc" onChange = {this.onInputChange}/>
                
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>

            </div>

            <Footer/>
            </div>
        )
    }
}

export default CreateEmpleado;