export class TipoDocumento{
    
    idTipoDocumento: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    estado: number;

    constructor(){
        this.idTipoDocumento=0;
        this.codigo="";
        this.nombre="";
        this.descripcion="";
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