export class TelaClass{
    nombre:String;
    precioProveedor:Number;
    precioCliente:Number;
    tipo:String;
    comentarios:String;
    proveedor:String;
    telaId:String;
    public constructor(init?: Partial<TelaClass>){
        Object.assign(this , init);
    }
}