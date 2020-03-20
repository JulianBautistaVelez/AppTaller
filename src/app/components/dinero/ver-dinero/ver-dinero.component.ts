import { Component, OnInit } from '@angular/core';
import { DineroService } from 'src/app/services/dinero/dinero.service';
import { Dinero } from 'src/app/model/dinero/Dinero';

@Component({
  selector: 'app-ver-dinero',
  templateUrl: './ver-dinero.component.html',
  styleUrls: ['./ver-dinero.component.css']
})
export class VerDineroComponent implements OnInit {

  dinero:Dinero;

  constructor(private service:DineroService) { }

  ngOnInit(): void {
    this.getDinero();
  }

  getDinero(){
    this.service.getDinero().subscribe((dineroResponse:Dinero) => this.dinero = dineroResponse);
  }

}
