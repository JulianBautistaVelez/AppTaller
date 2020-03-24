export class ClienteClass{
    nombre:String;
    direccion:String;
    telefono:Number;
    trabajos:String;
    presupuestos:String;
    comentarios:String;
    fecha:Date;
    clienteId:String;
    public constructor(init?: Partial<ClienteClass>){
        Object.assign(this , init);
    }

}