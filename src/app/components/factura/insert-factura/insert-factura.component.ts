import { Component, OnInit } from '@angular/core';

import { FacturaService } from 'src/app/services/factura/factura.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FacturaClass } from 'src/app/model/factura/FacturaClass';

@Component({
  selector: 'app-insert-factura',
  templateUrl: './insert-factura.component.html',
  styleUrls: ['./insert-factura.component.css']
})
export class InsertFacturaComponent implements OnInit {

  isLinear = false;
  loading=false;

  factDatos:FormGroup;
  clientDatos: FormGroup;
  compraDatos: FormGroup;
  productoForm: FormGroup;

  constructor(private service:FacturaService, private fb:FormBuilder) { }

  ngOnInit(): void {
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
      filas: this.fb.array([])
    });
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

  addProducto(){
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

    this.productoForms.push(compra)
  }

  deleteProducto(i){
    this.productoForms.removeAt(i);
  }

  async submitHandler() {
    this.loading = true;
    var factura = new FacturaClass(this.factDatos.value);
    this.service.insertFactura(factura).subscribe(
      data => console.log(data)
    );

    // try {
    //   await this.service.creaFactura(this.factDatos.value)
    //     .subscribe(results =>  {
    //       var url = results;
    //       window.open(url);
    //     }) ; 
    //   this.success = true;

    // } catch(err) {
    //   console.error(err)
    // }

    this.loading = false;
  }
}
