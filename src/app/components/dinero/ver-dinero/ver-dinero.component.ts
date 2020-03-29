import { Component, OnInit } from '@angular/core';
import { DineroService } from 'src/app/services/dinero/dinero.service';
import { MovimientoClass } from 'src/app/model/movimiento/MovimientoClass';
import { DineroClass } from 'src/app/model/dinero/DineroClass';

@Component({
  selector: 'app-ver-dinero',
  templateUrl: './ver-dinero.component.html',
  styleUrls: ['./ver-dinero.component.css']
})
export class VerDineroComponent implements OnInit {

  dinero:DineroClass;
  movimientos:MovimientoClass;

  constructor(private service:DineroService) { }

  ngOnInit(): void {
    this.getDinero();
  }

  getDinero(){
    this.service.getDinero().subscribe((dineroResponse:DineroClass) => this.dinero = dineroResponse);
  }

  transferDinero(){
    
    // this.service.get
  }

}
