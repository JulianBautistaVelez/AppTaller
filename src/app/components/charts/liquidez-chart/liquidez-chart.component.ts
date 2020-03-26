import { Component, OnInit, Input } from '@angular/core';
import { ChartsService } from 'src/app/services/charts/charts.service';
import { LineChartClass } from 'src/app/model/charts/LineChartClass';
import { Chart } from 'node_modules/chart.js'

@Component({
  selector: 'app-liquidez-chart',
  templateUrl: './liquidez-chart.component.html',
  styleUrls: ['./liquidez-chart.component.css']
})
export class LiquidezChartComponent implements OnInit {

  lineChartData:LineChartClass;


  constructor(
    private service:ChartsService,
  ) { }

  ngOnInit(): void {
    
    this.getChartData();
    
  }

  getChartData(){
    this.service.getLiquidez().subscribe(
      (data:LineChartClass) => {
        this.lineChartData = new LineChartClass(data);
        this.intializeChart();
      }
    );
  }

  intializeChart(){
    var ctx = document.getElementById("liquidezChart");
    var bancoValues = this.lineChartData.getBanco();
    var cajaValues = this.lineChartData.getCaja();
    var fechas = this.lineChartData.getFechas();
    new Chart(ctx, {
      type: 'line',
      data: {
          labels: fechas,
          datasets: [
              {
                lineTension:0.1,
                fill:'true',
                backgroundColor: 'rgba(184, 134, 11,1)',
                label: 'Banco',
                data: bancoValues,
              },
              {
                lineTension:0.1,
                fill:'true',
                backgroundColor: 'rgba(0, 100, 0,1)',
                label: 'Caja',
                data: cajaValues,
              }
          ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Progresión de la liquidez'
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        scales: {
          yAxes: [{
              stacked: true
          }]
        },
        annotation: { }
      }
  });
  }

  

}
