import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import '../../App.css'
import axios from 'axios';




class CreateProyecto extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            proyecto:undefined,
            clasificacion:undefined,
            cliente:undefined,
            employee:undefined,
            fecha_inic:undefined,
            fecha_fin:undefined
        }
        // this.onInputChange = this.onInputChange.bind(this)
    };

    onInputChange = (e) => {
        if(e.target.name === 'proyecto'){
            this.setState({
                proyecto: e.target.value
            })
        }
        else if(e.target.name === 'clasificacion'){
            this.setState({
                clasificacion: e.target.value
            })
        }else if(e.target.name === "cliente"){
            this.setState({
                cliente: e.target.value
            })
        }else if(e.target.name === "employee"){
            this.setState({
                employee: e.target.value
            })
        }else if(e.target.name === "fecha_inic"){
            this.setState({
                fecha_inic: e.target.value
            })
        }else if(e.target.name === "fecha_fin"){
            this.setState({
                fecha_fin: e.target.value
            })
        }
        
        
    }

    onSubmit= (e) =>{
        if(this.state.proyecto === undefined){
            alert("Ingresa el nombre del proyecto")
        }
        else if(this.state.clasificacion === undefined){
            alert("Ingresa el tipo de proyecto")
        }
        else if(this.state.cliente === undefined){
            alert("Ingrese el cliente que participa en el proyecto")
        }
        else if(this.state.employee === undefined){
            alert("Ingrese los empleados que trabajan en el proyecto")
        }
        else if(this.state.fecha_inic === undefined){
            alert("Ingrese la fecha de inicio")
        }
        else if(this.state.fecha_fin === undefined){
            alert("Ingrese la fecha de entrega")
        }
        else{
            let json = {
                proyecto:this.state.proyecto,
                clasificacion:this.state.clasificacion,
                cliente:this.state.cliente,
                employee:this.state.employee,
                fecha_inic:this.state.fecha_inic,
                fecha_fin:this.state.fecha_fin
            }
            axios.post("https://bdrivka.herokuapp.com/proyecto", json).then(proyecto =>{ 
                console.log(proyecto)
                alert('proyecto creado')
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
            <h1>Nuevo Proyecto</h1>
            <form onSubmit = {this.onSubmit}>
            <div class="form-group">
              <label for="exampleInputP">Nombre del Proyecto</label>
              <input type="text" class="form-control" id="exampleInputP" aria-describedby="PHelp" placeholder="" onChange = {this.onInputChange}/>
            </div>
            <div class="form-group">
              <label for="exampleInputNP">Clasificacion</label>
              <input type="text" class="form-control" id="exampleInputNP" aria-describedby="NPHelp" placeholder="ej. Aplicacion Movil, Pagina Web, etc" onChange = {this.onInputChange}/>
            </div>
            <div class="form-group">
              <label for="exampleInputcli">Cliente</label>
              <input type="text" class="form-control" id="exampleInputcli" aria-describedby="cliHelp" placeholder="" onChange = {this.onInputChange}/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmpl">Empleados</label>
                <input type="text" class="form-control" id="exampleInputEmpl" aria-describedby="EmplHelp" placeholder="Ingrese los empleados que estan trabajando en el proyecto" onChange = {this.onInputChange}/>
            </div>
            <div class="form-group">
                <label for="exampleInputFI">Fecha de Inicio</label>
                <input type="date" class="form-control" id="exampleInputFI" aria-describedby="FIHelp" placeholder="" onChange = {this.onInputChange}/>
            </div>
            <div class="form-group">
                <label for="exampleInputFF">Fecha de Entrega</label>
                <input type="date" class="form-control" id="exampleInputFF" aria-describedby="FFHelp" placeholder="" onChange = {this.onInputChange}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
            
           

            <Footer/>
            </div>
        )
    }
}

export default CreateProyecto;