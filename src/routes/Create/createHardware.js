import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import '../../App.css'
import axios from 'axios';




class CreateHardware extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            marca:undefined,
            so:undefined,
            proce:undefined,
            hdd:undefined,
            ssd:undefined,
            ram:undefined,
            grafica:undefined
        }
        // this.onInputChange = this.onInputChange.bind(this)
    };

    onInputChange = (e) => {
        if(e.target.name === 'marca'){
            this.setState({
                marca: e.target.value
            })
        }else if(e.target.name === "so"){
            this.setState({
                so: e.target.value
            })
        }else if(e.target.name === "proce"){
            this.setState({
                proce: e.target.value
            })
        }else if(e.target.name === "hdd"){
            this.setState({
                hdd: e.target.value
            })
        }else if(e.target.name === "ssd"){
            this.setState({
                ssd: e.target.value
            })
        }else if(e.target.name === "ram"){
            this.setState({
                ram: e.target.value
            })
        }else if(e.target.name === "grafica"){
            this.setState({
                grafica: e.target.value
            })
        }
        
        
    }

    onSubmit= (e) =>{
        if(this.state.marca === undefined){
            alert("Ingresa la marca")
        }
        else if(this.state.so === undefined){
            alert("Ingresa el sistema operativo")
        }
        else if(this.state.proce === undefined){
            alert("Ingresa el procesador")
        }
        else if(this.state.hdd === undefined){
            alert("Ingresa la cantidad de memoria del Disco Duro")
        }
        else if(this.state.ssd === undefined){
            alert("Ingresa la cantidad de memoria SSD")
        }
        else if(this.state.ram === undefined){
            alert("Ingresa la cantidad de RAM")
        }
        else if(this.state.grafica === undefined){
            alert("Ingresa la tarjeta grafica")
        }
        else{
            let json = {
                marca:this.state.marca,
                so:this.state.so,
                proce:this.state.proce,
                hdd:this.state.hdd,
                ssd:this.state.ssd,
                ram:this.state.ram,
                grafica:this.state.grafica
            }
            axios.post("https://bdrivka.herokuapp.com/hardware", json).then(hardware =>{ 
                console.log(hardware)
                alert('hardware creado')
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
            <h1>Nuevo Hardware</h1>
            <form onSubmit = {this.onSubmit}>
            <div class="form-group">
              <label for="exampleInputMarca">Marca</label>
              <input type="text" class="form-control" id="exampleInputMarca" aria-describedby="MarcaHelp" placeholder="Ingrese la marca de la computadora" onChange = {this.onInputChange}/>
              
            </div>
            <div class="form-group">
              <label for="exampleInputSO">Sistema Operativo</label>
              <input type="text" class="form-control" id="exampleInputSO" aria-describedby="SOHelp" placeholder="Ingrese el sistema Operativo" onChange = {this.onInputChange}/>
              
            </div>
            <div class="form-group">
                <label for="exampleInputProcesador">Procesador</label>
                <input type="text" class="form-control" id="exampleInputProcesador" aria-describedby="ProcesadorHelp" placeholder="Ingrese especificaciones del procesador de su computadora" onChange = {this.onInputChange}/>
                
            </div>
            <div class="form-group">
              <label for="exampleInputHDD">HDD</label>
              <input type="text" class="form-control" id="exampleInputHDD" aria-describedby="HDDHelp" placeholder="Ingrese la cantidad de Disco Duro que tiene su computadora" onChange = {this.onInputChange}/>
              
            </div>
            <div class="form-group">
              <label for="exampleInputSSD">SSD</label>
              <input type="text" class="form-control" id="exampleInputSSD" aria-describedby="SSDHelp" placeholder="Ingrese la cantidad de disco en estado solido que tiene su computadora" onChange = {this.onInputChange}/>
              
            </div>
            <div class="form-group">
              <label for="exampleInputRAM">RAM</label>
              <input type="text" class="form-control" id="exampleInputRAM" aria-describedby="RAMHelp" placeholder="Ingrese la cantidad de RAM que tiene su computadora" onChange = {this.onInputChange}/>
              
            </div>
            <div class="form-group">
              <label for="exampleInputGrafica">Tarjeta Grafica</label>
              <input type="text" class="form-control" id="exampleInputGrafica" aria-describedby="GraficaHelp" placeholder="Ingrese las especificaciones de la tarjeta grafica de su computadora" onChange = {this.onInputChange}/>
              
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
            
           

            <Footer/>
            </div>
        )
    }
}

export default CreateHardware;