export class RangoFechaClass{
    fechaInicio:Date;
    fechaFin:Date;
    public constructor(init?: Partial<RangoFechaClass>){
        Object.assign(this , init);
    }
}