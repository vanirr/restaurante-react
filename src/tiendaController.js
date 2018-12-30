import { extendObservable} from 'mobx';

class TiendaControler{
	constructor(){
		extendObservable(this,
			{
				platillos:[{
			 nombre: "primerPlatillo",
		       description: "platillo muy rico",
		       precio:100
		       cantidad: 0},
			{nombre: "segundoPlatillo",
			   description: "platillo muy rico",
			   precio:108
			   cantidad: 0},
			{nombre: "tercerPlatillo",
			   description: "platillo muy rico",
			   precio:900
			   cantidad: 0}],

			   bebidas: [
				{nombre: 'primerBebida',
					descripcion: 'bebida muy rica',
					precio: 20,
					cantidad:45},
				{nombre: 'segundaBebida',
					descripcion: 'bebida muy rica',
					precio: 30,
					cantidad: 98},
				{nombre: 'tercerBebida',
					descripcion: 'bebida muy rica',
					precio: 40,
					cantidad: 65}]

			})
	}
	ponerEnLaOrden(indicePlatillo,cantidadPlatillo){
		this.platillos.forEach(
           (value,index)=>{if(indicePlatillo === index ){
           	this.platillos[index].cantidad = cantidadPlatillo;
           }
          }
		)

	}
}
var VarTiendaController = new TiendaControler;
export default VarTiendaController;