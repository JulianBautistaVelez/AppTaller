import { Component, OnInit } from '@angular/core';
import { MovimientoService } from 'src/app/services/movimiento/movimiento.service';
import { MovimientoClass } from 'src/app/model/movimiento/MovimientoClass';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { RangoFechaClass } from 'src/app/model/shared/RangoFechaClass';

@Component({
  selector: 'app-listar-movimientos',
  templateUrl: './listar-movimientos.component.html',
  styleUrls: ['./listar-movimientos.component.css']
})
export class ListarMovimientosComponent implements OnInit {

  tableData:MovimientoClass[];
  displayedColumns: string[] = [
    "Fecha",
    "Concepto",
    "Valor",
    "Origen/Destino"
  ]
  datosFecha:FormGroup;
  fechaActual = new Date();
  fechaInicioMes = new Date(
    this.fechaActual.getFullYear(), 
    this.fechaActual.getMonth(), 
    1);
  rangoFechas:RangoFechaClass;
  
  constructor(private service:MovimientoService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.datosFecha = this.fb.group({
      fechaInicio: new FormControl(this.fechaInicioMes),
      fechaFin: new FormControl(this.fechaActual)
    })
    this.getMovimientos();
  }

  getTotalCost() {
    var suma = 0;
    var arrDatos = Object.keys(this.tableData).map(i => this.tableData[i]);
    arrDatos.forEach(mov => {
      suma += parseFloat(mov["valor"]);
    });

    return suma;
  }

  cambioFechaInicio() {
    this.getMovimientos();
  }
  cambioFechaFinal() {
    this.getMovimientos();
  }

  getMovimientos(){
    this.rangoFechas = new RangoFechaClass(this.datosFecha.value);
    this.service.getMovimientos(this.rangoFechas).subscribe(
      (data:MovimientoClass[]) =>  this.tableData = data
    )
    
  }

  getGastos(){
    this.rangoFechas = new RangoFechaClass(this.datosFecha.value);
    this.service.getGastos(this.rangoFechas).subscribe(
      (data:MovimientoClass[]) => this.tableData = data
    );
  }

  getIngresos(){
    this.rangoFechas = new RangoFechaClass(this.datosFecha.value);
    this.service.getIngresos(this.rangoFechas).subscribe(
      (data:MovimientoClass[]) => this.tableData = data
    );
  }

}
