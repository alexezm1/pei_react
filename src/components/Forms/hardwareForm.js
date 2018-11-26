import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'


class hardwareForm extends Component {
    constructor(props){
        super(props)
    }

    

    render() {
        return (
            <form>
            <div className="form-group">
              <label for="exampleInputMarca">Marca</label>
              <input type="text" class="form-control" id="exampleInputMarca" aria-describedby="MarcaHelp" placeholder="Ingrese la marca de la computadora">
              </input>
            </div>
            <div class="form-group">
              <label for="exampleInputSO">Sistema Operativo</label>
              <input type="text" class="form-control" id="exampleInputSO" aria-describedby="SOHelp" placeholder="">
              </input>
            </div>
            <div class="form-group">
                <label for="exampleInputProcesador">Procesador</label>
                <input type="text" class="form-control" id="exampleInputProcesador" aria-describedby="ProcesadorHelp" placeholder="Ingrese especificaciones del procesador de su computadora">
                </input>
            </div>
            <div class="form-group">
              <label for="exampleInputHDD">HDD</label>
              <input type="text" class="form-control" id="exampleInputHDD" aria-describedby="HDDHelp" placeholder="Ingrese la cantidad de Disco Duro que tiene su computadora">
              </input>
            </div>
            <div class="form-group">
              <label for="exampleInputSSD">SSD</label>
              <input type="text" class="form-control" id="exampleInputSSD" aria-describedby="SSDHelp" placeholder="Ingrese la cantidad de disco en estado solido que tiene su computadora">
              </input>
            </div>
            <div class="form-group">
              <label for="exampleInputRAM">RAM</label>
              <input type="text" class="form-control" id="exampleInputRAM" aria-describedby="RAMHelp" placeholder="Ingrese la cantidad de RAM que tiene su computadora">
              </input>
            </div>
            <div class="form-group">
              <label for="exampleInputGrafica">Tarjeta Grafica</label>
              <input type="text" class="form-control" id="exampleInputGrafica" aria-describedby="GraficaHelp" placeholder="Ingrese las especificaciones de la tarjeta grafica de su computadora">
              </input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>



        );
    };

};

export default hardwareForm;