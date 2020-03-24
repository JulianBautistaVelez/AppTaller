import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FacturaService } from 'src/app/services/factura/factura.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturaClass } from 'src/app/model/factura/FacturaClass';

@Component({
  selector: 'app-update-factura',
  templateUrl: './update-factura.component.html',
  styleUrls: ['./update-factura.component.css']
})
export class UpdateFacturaComponent implements OnInit {

  id:String;
  isLinear = false;

  factDatos:FormGroup;
  clientDatos: FormGroup;
  compraDatos: FormGroup;
  productoForm: FormGroup;
  
  constructor(
    private service:FacturaService, 
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getRouteID();
    this.getFacturaById();
  }

  initializeForm(){
    this.factDatos = this.fb.group({
      nombre:null,
      nif:null,
      direccion:null,
      cpProvincia:null,
      numeroIdentificador: ['', [
        Validators.pattern('^[0-9]+(\[0-9])?$'),
        Validators.minLength(3),
        Validators.maxLength(3),
        Validators.required
      ]],
      fecha: ['', Validators.required],
      filas: this.fb.array([]),
    });
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
      (data:FacturaClass) => {
        this.factDatos.patchValue(data);
        data.filas.forEach(fila => {
          this.addProducto(fila)
        });
      }
    );
  }

  get numeroIdentificador(){
    return this.factDatos.get('numeroIdentifiador');
  }
  get fecha(){
    return this.factDatos.get('fecha');
  }
  get nombre(){
    return this.factDatos.get('nombre');
  }
  get nif(){
    return this.factDatos.get('nif');
  }
  get direccion(){
    return this.factDatos.get('direccion');
  }
  get cpProvincia(){
    return this.factDatos.get('cpProvincia');
  }

  get productoForms(){
    return this.factDatos.get('filas') as FormArray
  }

  addProducto(fila?){
    const compra= this.fb.group({
      unidades: ["",[
        Validators.pattern('^[0-9]+(\[0-9])?$'),
        Validators.maxLength(3),
        Validators.required
      ]],
      concepto: [null],
      valor: ["",[
        Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$'),
        Validators.required
      ]],
      valorTotal:[]
    })

    compra.get('valor').valueChanges.subscribe(
      x => compra
        .get('valorTotal')
        .setValue(
        compra.get('unidades').value * x
      )
    );
    compra.get('unidades').valueChanges.subscribe(
      x => compra
        .get('valorTotal')
        .setValue(
          compra.get('valor').value * x
        )
      );
    if(fila != null){compra.patchValue(fila);}
    this.productoForms.push(compra)
  }

  deleteProducto(i){
    this.productoForms.removeAt(i);
  }

  async submitHandler() {
    var factura = new FacturaClass(this.factDatos.value);
    this.service.updateFactura(factura, this.id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['../facturas']);
      }
    );
  }

}
