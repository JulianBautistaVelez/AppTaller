import { Component, OnInit } from '@angular/core';
import { FacturaClass } from 'src/app/model/factura/FacturaClass';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RangoFechaClass } from 'src/app/model/shared/RangoFechaClass';
import { FacturaService } from 'src/app/services/factura/factura.service';

@Component({
  selector: 'app-listar-facturas',
  templateUrl: './listar-facturas.component.html',
  styleUrls: ['./listar-facturas.component.css']
})
export class ListarFacturasComponent implements OnInit {
  
  tableData:FacturaClass[];
  displayedColumns: string[] = [
    "fecha",
    "numeroIdentificador",
    "cliente",
    "valorTotal"
  ]
  datosFecha:FormGroup;
  fechaActual = new Date();
  fechaInicioTrimestre = new Date(
    this.fechaActual.getFullYear(),
    (Math.floor(this.fechaActual.getMonth() / 3) * 3),
    1);
  rangoFechas:RangoFechaClass;

  constructor(private service:FacturaService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.datosFecha = this.fb.group({
      fechaInicio: new FormControl(this.fechaInicioTrimestre),
      fechaFin: new FormControl(this.fechaActual)
    })
    this.getFacturas();
  }

  cambioFechaInicio() {
    this.getFacturas();
  }
  cambioFechaFinal() {
    this.getFacturas();
  }

  getFacturas(){
    this.rangoFechas = new RangoFechaClass(this.datosFecha.value);
    this.service.getFacturas(this.rangoFechas).subscribe(
      (data:FacturaClass[]) => this.tableData = data
    )
  }


}
