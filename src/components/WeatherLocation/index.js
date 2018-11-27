import {Component} from 'react';
import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN,WINDY} from './../../constants/weathers';
import './styles.css';

const data1={
	temperature:20,
	weatherState:SUN,
	humidity:10,
	wind:'10 m/S',
}
const data2={
	temperature:60,
	weatherState:WINDY,
	humidity:5,
	wind:'20 m/S',
}

class WeatherLocation extends Component {

	constructor(){
		super();
		this.state ={
			
			city: 'Buenos Aires ada',
			data: data1


		};
	}

	handleUpdateClick=()=>{
      this.setState=({
      	city: 'Buenos Aires ada',
			data: data2


      });

		console.log("actualizado");

	}

render=()=>(

	<div className='WeatherLocationCont'>
	  <Location city={this.state.city} />
	  <WeatherData data={this.state.data}/>
	  <button onClick={this.handleUpdateClick}>Actualizar</button>
	  
     
	</div>
	);
}
	export default WeatherLocation;