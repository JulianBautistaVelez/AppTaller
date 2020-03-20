export class DineroClass{
    banco:Number;
    caja:Number;
    fecha:Date;
    dineroId:String;
    public constructor(init?: Partial<DineroClass>){
        Object.assign(this , init);
    }
}