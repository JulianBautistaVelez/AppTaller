export class FacturaClass{
    fecha:Date;
    nombre:String;
    direccion:String;
    cpProvincia:String;
    filas:{
        concepto:String,
        valor:Number,
        unidades:Number,
        valorTotal:Number
    }[];
    facturaId:String;
    public constructor(init?: Partial<FacturaClass>){
        Object.assign(this , init);
    }
}