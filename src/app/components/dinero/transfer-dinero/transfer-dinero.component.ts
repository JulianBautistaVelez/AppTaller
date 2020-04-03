import { Component, OnInit, Input } from '@angular/core';
import { MovimientoService } from 'src/app/services/movimiento/movimiento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovimientoClass } from 'src/app/model/movimiento/MovimientoClass';
import { TipoMovimiento } from 'src/app/model/shared/TipoMovimiento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transfer-dinero',
  templateUrl: './transfer-dinero.component.html',
  styleUrls: ['./transfer-dinero.component.css']
})
export class TransferDineroComponent implements OnInit {

  origen:string;
  destino:string;
  form:FormGroup;
  movimientos = [];

  constructor(
    private service:MovimientoService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getRouteID();
    this.initializeForm();
  }

  getRouteID(){
    this.route.paramMap.subscribe(
      params => {
        this.origen = params.get('origen');
      }
    )
  }

  initializeForm(){
    this.destino = this.origen === "banco" ? "caja" : "banco";
    this.form = this.fb.group({
      cantidad: ["", [Validators.required]],
      destino: this.destino
    });
  }

  get cantidad() {
    return this.form.get("cantidad");
  }

  submitHandler() {
    this.createMovimientos();
    this.service.insertMultiMovimiento(this.movimientos)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['']);
        }
      );
  }

  createMovimientos(){
    let concepto = "Transferencia de " + this.origen + " a " + this.destino;
    let valor = this.form.get('cantidad').value;
    let i;
    for(i=0; i<2; i++){
      let movimiento = new MovimientoClass(
        {
          concepto:concepto,
          tipo:i==0?TipoMovimiento.gasto:TipoMovimiento.ingreso,
          valor:valor,
          cajaBanco:i==0?this.origen:this.destino,
        }
        
      );
      this.movimientos.push(movimiento);
    }
  }
}
