export interface Factura {
    fecha:Date,
    numeroIdentificador:String,
    nombre:String,
    nif:String,
    direccion:String,
    cpProvincia:String,
    base:Number,
    iva:Number,
    filas:{
        concepto:String,
        valor:Number,
        unidades:Number,
        valorTotal:Number
    }[],
    facturaId:String
}