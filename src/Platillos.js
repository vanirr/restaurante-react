import React, { Component } from 'react';
import './Platillos.css';
import logo from './logo.svg';
import VarTiendaController from './tiendaController';
import Ordenar from './Ordenar';
class Platillos extends Component{
	render(){
		let PlatillosPedidos=[];


		const llenar_array_platillos_div = VarTiendaController.platillos.forEach(
            (value, index)=>(
               platillos_div.push(
                 <div className="list-group-item" key={index}> 
                   <div className="panel-body">
                     <img src={logo} role="presentation" className="ImagenPlatillo"/>
                     <h2 className="TitlePlatillo">{value.nombre}</h2>
                     <div className="DescriptionPlatillo">{value.description}</div>
                     <Ordenar precio={value.precio} indice={index}
                     hacerPedico={(indice_d,evento_d)=>{VarTiendaController.ponerEnlaOrden(indice_d,evento_d)}}/>
                   </div>
                 </div>
               	)
            	)
			)
		return(
          <div className="container col-md-6 ">
              <div>
              	 <div className="panel panel-primary">
              	    <div className="list-group Platillos-Menu">
                    {platillos_div}
                    </div>   
                 </div>
              </div>
          </div>
			);
	}
}
export default Platillos;