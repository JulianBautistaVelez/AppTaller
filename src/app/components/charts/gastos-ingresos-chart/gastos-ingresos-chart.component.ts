import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'node_modules/chart.js'
import { PieChartClass } from 'src/app/model/charts/PieChartClass';
import { ChartsService } from 'src/app/services/charts/charts.service';
import { RangoFechaClass } from 'src/app/model/shared/RangoFechaClass';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import 'chartjs-plugin-colorschemes';


@Component({
  selector: 'app-gastos-ingresos-chart',
  templateUrl: './gastos-ingresos-chart.component.html',
  styleUrls: ['./gastos-ingresos-chart.component.css']
})
export class GastosIngresosChartComponent implements OnInit {

  @Input() gastoIngreso:string;
  pieChartData:PieChartClass;
  datosFecha:FormGroup;
  fechaActual = new Date();
  fechaInicioMes = new Date(
    this.fechaActual.getFullYear(), 
    this.fechaActual.getMonth(), 
    1);
  rangoFechas:RangoFechaClass;
  isChartInitialized = false;

  constructor(
    private service:ChartsService,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.intializeForm();
    this.getChartData();
    
  }

  intializeForm(){
    this.datosFecha = this.fb.group({
      fechaInicio: new FormControl(this.fechaInicioMes),
      fechaFin: new FormControl(this.fechaActual)
    });
  }

  getChartData(){
    this.rangoFechas = new RangoFechaClass(this.datosFecha.value);
    this.service.getPieData(this.rangoFechas, this.gastoIngreso).subscribe(
      (data:PieChartClass) => {
        this.pieChartData = new PieChartClass(data);
        this.intializeChart();
      }
    );
  }

  cambioFechaInicio() {
    this.getChartData();
  }
  cambioFechaFinal() {
    this.getChartData();
  }

  intializeChart(){
    var ctx = document.getElementById(this.gastoIngreso);
    var valores = this.pieChartData.getValores();
    var conceptos = this.pieChartData.getConceptos();
    var title =  this.gastoIngreso === 'gasto'? "Gastos por concepto": "Ingresos por concepto";
    new Chart(ctx, {
      type: 'pie',
      data: {
          labels: conceptos,
          datasets: [
              {
                weight: 1,
                data: valores,

              }
          ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: title
        },
        plugins: {
          colorschemes: {
              scheme: 'brewer.Paired12'
          }
        }
      }
  });

  this.isChartInitialized = true;
  }

}
