import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import '../../App.css'
import axios from 'axios';




class CreateSoftware extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            name:undefined,
            enfoque:undefined,
            licencia:undefined
        }
        // this.onInputChange = this.onInputChange.bind(this)
    };

    onInputChange = (e) => {
        if(e.target.name === 'name'){
            this.setState({
                name: e.target.value
            })
        }else if(e.target.name === "enfoque"){
            this.setState({
                enfoque: e.target.value
            })
        }else if(e.target.name === "licencia"){
            this.setState({
                licencia: e.target.value
            })
        }
        
        
    }

    onSubmit= (e) =>{
        if(this.state.name === undefined){
            alert("Ingresa el nombre del software")
        }
        else if(this.state.enfoque === undefined){
            alert("Ingresa el enfoque del software")
        }
        else if(this.state.liencia === undefined){
            alert("Indica si cuenta con licencia del software")
        }
        else{
            let json = {
                name:this.state.name,
                enfoque:this.state.enfoque,
                licencia:this.state.licencia
            }
            axios.post("https://bdrivka.herokuapp.com/software", json).then(software =>{ 
                console.log(software)
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
            <h1>Nuevo Software</h1>
            <form>
            <div class="form-group">
              <label for="exampleInputSW">Nombre del Software</label>
              <input type="text" class="form-control" id="exampleInputSW" aria-describedby="SWHelp" placeholder="" onChange = {this.onInputChange}/>
            </div>
            <div class="form-group">
              <label for="exampleInputSW">Enfoque del software</label>
              <input type="text" class="form-control" id="exampleInputSW" aria-describedby="SWHelp" placeholder="ej. Diseño de paginas web, Entorno de Desarrollo, etc" onChange = {this.onInputChange}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
            
           

            <Footer/>
            </div>
        )
    }
}

export default CreateSoftware;