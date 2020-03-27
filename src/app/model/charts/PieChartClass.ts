export class PieChartClass{
    data: {
        [key: string]:Number
    }

    public constructor(init?: Partial<PieChartClass>){
        Object.assign(this , init);
    }

    getConceptos(){
        return Object.keys(this.data);
    }

    getValores(){
        return Object.values(this.data);
    }
}