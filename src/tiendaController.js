import { extendObservable} from 'mobx';

class TiendaControler{
	constructor(){
		extendObservable(this,{platillos:[{
			 nombre: "primerPlatillo",
		       description: "platillo muy rico",
		       precio:100},
			{nombre: "segundoPlatillo",
			   description: "platillo muy rico",
			   precio:100},
			{nombre: "tercerPlatillo",
			   description: "platillo muy rico",
			   precio:100}]
			})
	}
}
var VarTiendaController = new TiendaControler;
export default VarTiendaController;