import { Component, OnInit, ElementRef , ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturaClass } from 'src/app/model/factura/FacturaClass';
import { FacturaService } from 'src/app/services/factura/factura.service';

import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-factura-details',
  templateUrl: './factura-details.component.html',
  styleUrls: ['./factura-details.component.css']
})
export class FacturaDetailsComponent implements OnInit {

  factura:FacturaClass;
  id:String;

  constructor(private route:ActivatedRoute, private service:FacturaService) { }

  ngOnInit(): void {
    this.getRouteID();
    this.getFacturaById();
  }

  getRouteID(){
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('facturaId');
      }
    )
  }

  getFacturaById(){
    this.service.getFacturaById(this.id).subscribe(
      (data:FacturaClass) => this.factura = data
    );
  }

  printScreen(){
    const options = {
      filename: 'factura.pdf',
      image: {type:'jpeg' , quality: 1},
      html2canvas:{ 
        scrollX: 0,
        scrollY: 0 
      },
      jspdf:{orientation:'landscape'}
    }
    var data = document.getElementById('contentToPrint');
    html2pdf().from(data).set(options).save();

  }

  editFactura(){

  }

}
