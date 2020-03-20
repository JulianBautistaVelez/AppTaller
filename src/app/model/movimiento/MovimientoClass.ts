import { TipoMovimiento } from 'src/app/shared/TipoMovimiento';

export class MovimientoClass{
    concepto:String;
    tipo:TipoMovimiento;
    valor:Number;
    cajaBanco:String;
    movimientoId:String;
    fecha:Date;
    public constructor(init?: Partial<MovimientoClass>){
        Object.assign(this , init);
    }
} 