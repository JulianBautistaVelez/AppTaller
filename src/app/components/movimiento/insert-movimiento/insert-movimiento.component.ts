import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gastosFrecuentes, ingresosFrecuentes } from 'src/app/model/shared/ConceptosFrecuentes';
import { MovimientoService } from 'src/app/services/movimiento/movimiento.service';
import { MovimientoClass } from 'src/app/model/movimiento/MovimientoClass';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-insert-movimiento',
  templateUrl: './insert-movimiento.component.html',
  styleUrls: ['./insert-movimiento.component.css']
})
export class InsertMovimientoComponent implements OnInit {
  @Input() tipoMovimiento:string;
  form:FormGroup;
  movimiento:MovimientoClass;
  gastos = gastosFrecuentes;
  ingresos = ingresosFrecuentes;

  constructor(
    private fb:FormBuilder,
    private service:MovimientoService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.tipoMovimiento = params.get('tipo');
      }
    )
    this.form = this.fb.group({
      valor:[null,[
        Validators.required,
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
      ]],
      concepto:null,
      cajaBanco:[null,[
        Validators.required
      ]],
      tipo:String,
      deducible:false,
      descripcion:''
    })
    this.form.controls['tipo'].setValue(this.tipoMovimiento);
  }

  get cantidad(){return this.form.get('cantidad');}
  get concepto(){return this.form.get('concepto');}
  get cajaBanco(){return this.form.get('cajaBanco');}
  get tipo(){return this.form.get('tipo');}
  get deducible(){return this.form.get('deducible');}
  get descripcion(){return this.form.get('descripcion');}

  setDeducible(isChecked: boolean) {
    if (isChecked) {
      this.form.controls['deducible'].setValue(true);
    } else {
      this.form.controls['deducible'].setValue(false);
    }
  }

  submitHandler(form){
    this.movimiento = new MovimientoClass(this.form.value);
    this.service.inserMovimiento(this.movimiento).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['../movimientos']);
      }
    );
    console.log(this.movimiento);
  }

}
