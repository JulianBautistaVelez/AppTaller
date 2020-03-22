export class FacturaClass{
    fecha:Date;
    numeroIdentificador:Number;
    nombre:String;
    nif:String;
    direccion:String;
    cpProvincia:String;
    base:Number;
    iva:Number;
    total:Number;
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