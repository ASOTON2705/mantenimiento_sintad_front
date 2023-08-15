export class Entidad{
    
    idEntidad: number;
    idTipoDocumento: number;
    nombreTipoDocumento: string;
    nroDocumento: string;
    razonSocial: string;
    nombreComercial: string;
    idTipoContribuyente: number;
    nombreTipoContribuyente: string;
    direccion: string;
    telefono: string;
    estado: number;

    constructor(){
        this.idEntidad=0;
        this.idTipoDocumento=0;
        this.nombreTipoDocumento="";
        this.nroDocumento="";
        this.razonSocial="";
        this.nombreComercial="";
        this.idTipoContribuyente=0;
        this.nombreTipoContribuyente="";
        this.direccion="";
        this.telefono="";
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