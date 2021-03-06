import { TipoMovimiento } from 'src/app/model/shared/TipoMovimiento';

export class MovimientoClass{
    concepto:String;
    tipo:TipoMovimiento;
    valor:Number;
    cajaBanco:String;
    movimientoId:String;
    fecha:Date;
    deducible:Boolean;
    descripcion:String;
    public constructor(init?: Partial<MovimientoClass>){
        Object.assign(this , init);
    }
} 