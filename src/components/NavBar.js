import React, {Component} from 'react'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                            <a className="nav-link" href="/hardware">Hardware <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/software">Software <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/empleado">Empleados <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/proyecto">Proyectos<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Crear
                        </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/create_cliente">Nuevo Cliente</a>
                                <a className="dropdown-item" href="/create_empleado">Nuevo Empleado</a>
                                <a className="dropdown-item" href="/create_hardware">Nuevo Hardware</a>
                                <a className="dropdown-item" href="/create_software">Nuevo Software</a>
                                <a className="dropdown-item" href="/create_proyecto">Nuevo Proyecto</a>
                            </div>
                    </div>
                    </li>
                    </ul>
                </div>
            </nav> 
        );
    }
}

export default Navbar;