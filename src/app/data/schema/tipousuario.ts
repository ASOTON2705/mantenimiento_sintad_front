export class TipoUsuario{
    
    idTipoUsuario: number;
    nombreTipoUsuario: string;
    estado: number;

    constructor(){
        this.idTipoUsuario=0;
        this.nombreTipoUsuario="";
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