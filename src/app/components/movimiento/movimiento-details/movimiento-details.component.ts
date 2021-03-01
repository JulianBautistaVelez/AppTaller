import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovimientoService } from 'src/app/services/movimiento/movimiento.service';
import { MovimientoClass } from 'src/app/model/movimiento/MovimientoClass';

@Component({
  selector: 'app-movimiento-details',
  templateUrl: './movimiento-details.component.html',
  styleUrls: ['./movimiento-details.component.css']
})
export class MovimientoDetailsComponent implements OnInit {

  movimiento:MovimientoClass;
  id:String;
  iva:Number;

  constructor(
    private route:ActivatedRoute,
    private service:MovimientoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getRouteID();
  }

  getRouteID(){
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('movimientoId');
        this.getmovimientoById();
      }
    )
  }

  getmovimientoById(){
    this.service.getMovimientoById(this.id).subscribe(
      (data:MovimientoClass) => {
        this.movimiento = data;
        this.iva = data.valor.valueOf() * 0.21;
      }
    )
  }

  deleteMovimiento(){
    if(confirm("¿Seguro desea eliminar el movimiento "+ this.movimiento.concepto + " ?")) {
      this.service.deleteMovimiento(this.id).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['']);
        }
      );
    }
  }

}
