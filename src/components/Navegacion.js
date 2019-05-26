import React,{Component} from 'react';

class Navegacion extends Component {
    render(){
        return(
        <nav className="nav justify-content-center">
            <a className="text-aqua">
                { this.props.titulo}
            </a>
            <a className="nav-link active" href="#">Active link</a>
            <a className="nav-link" href="#">Link</a>
            <a className="nav-link disabled" href="#">Disabled link</a>
          </nav> 
        );
    }
}

export default Navegacion;