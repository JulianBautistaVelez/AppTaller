import { Component, OnInit } from '@angular/core';
import { TelaClass } from 'src/app/model/tela/TelaClass';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TelaService } from 'src/app/services/tela/tela.service';
import { tiposTela } from 'src/app/shared/TiposTela';
import { proveedoresTela } from 'src/app/shared/ProveedoresTela';
import { Router } from '@angular/router';


@Component({
  selector: 'app-insert-tela',
  templateUrl: './insert-tela.component.html',
  styleUrls: ['./insert-tela.component.css']
})
export class InsertTelaComponent implements OnInit {

  tela:TelaClass;
  form:FormGroup;
  tiposTela = tiposTela;
  proveedoresTela = proveedoresTela;

  constructor(
    private service:TelaService,
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      precioProveedor: [
        '',
        [Validators.pattern("^[0-9]+(.[0-9]{1,2})?$")]
      ],
      precioCliente: ['', [Validators.pattern("^[0-9]+(.[0-9]{1,2})?$")]],
      tipo: '',
      comentarios: '',
      proveedor: ''
    });
  }

  get nombre() {
    return this.form.get("nombre");
  }
  get precioProveedor() {
    return this.form.get("precioProveedor");
  }
  get precioCliente() {
    return this.form.get("precioCliente");
  }
  get tipo() {
    return this.form.get("tipo");
  }
  get comentarios() {
    return this.form.get("comentarios");
  }
  get proveedor() {
    return this.form.get("proveedor");
  }

  submitHandler(){
    this.tela = new TelaClass(this.form.value);
    this.service.insertTela(this.tela).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['../telas']);
      }
    );
  }

  clearForm(){
    this.form.reset();
  }



}
