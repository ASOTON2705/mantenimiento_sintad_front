export class Usuario{
    idUsuario: number;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    idTipoUsuario: number;
    nombreTipoUsuario: string;
    loginUsuario: string;
    contrasenaUsuario: string;
    estado: number;
    tipoUsuario:any;

    constructor(){
        this.idUsuario=0;
        this.nombre="";
        this.apellido="";
        this.correo="";
        this.telefono="";
        this.idTipoUsuario=0;
        this.nombreTipoUsuario="";
        this.loginUsuario="";
        this.contrasenaUsuario="";
        this.estado=0;
    }
    



}