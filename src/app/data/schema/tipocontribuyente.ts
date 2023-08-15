export class TipoContribuyente{
    
    idTipoContribuyente: number;
    nombre: string;
    estado: number;

    constructor(){
        this.idTipoContribuyente=0;
        this.nombre="";
        this.estado=0;
    }

    NombreEstado(estado:number):string {

        let nombreEstado:string = "";

       switch (estado) {
           case 0:
               nombreEstado = "Activo";
               break;
           case 1:
               nombreEstado = "Inactivo";
               break;
           default:
               nombreEstado = "Otros";
       }

       return nombreEstado;

   }
}