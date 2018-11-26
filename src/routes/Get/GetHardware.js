import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';
import Card from '../../components/Cards/hardwareCards'
import '../../App.css'
import axios from 'axios';



class GetHardware extends Component{
    constructor(props){
        super(props)
        this.state = {
            hardware: []
        }
        
    }
    

    componentDidMount(){
        axios.get('https://bdrivka.herokuapp.com/hardware',  )
            .then(response =>{
                this.setState({
                    hardware: response.data
                })
                console.log(response)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    updateHardware(){
        if(this.state.hardware.length === 0){
           return <div>Cargando...</div> 
        }
        else{
            let hardwares = this.state.hardware.map((elem,ix,arr)=>{
                return <Card marca = {elem.marca} so = {elem.so}  uid={elem._id}/>
            })
            return hardwares
        }
        
    }


    render(){
        return(
            <div className ="App">
            <Navbar/>
            <Header/>
           
            <div className="row">
            <div className="d-flex flex-wrap justify-content-center">
            
                {this.updateHardware()}
            </div>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default GetHardware;