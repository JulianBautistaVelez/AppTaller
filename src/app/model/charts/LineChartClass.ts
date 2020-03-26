export class LineChartClass{
    data:{
        [fecha:string]:{
            banco:Number,
            caja:Number
        }
    };

    public constructor(init?: Partial<LineChartClass>){
        Object.assign(this , init);
    }

    getFechas(){
        var fechas = new Array();
        for (let key in this.data) {
            let fullDate = new Date(key);
            let day = fullDate.getDay() +1;
            let month = fullDate.getMonth() +1;
            fechas.push(day +'/'+month );
        }
        return fechas;
    }

    getBanco(){
        var banco = new Array();
        for (let key in this.data){
            let cantidad = this.data[key].banco
            banco.push(cantidad);
        }
        return banco;
    }

    getCaja(){
        var caja = new Array();
        for (let key in this.data){
            let cantidad = this.data[key].caja
            caja.push(cantidad);
        }
        return caja;
    }

}