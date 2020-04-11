import { Component, OnInit } from '@angular/core';
import { ClienteClass } from 'src/app/model/cliente/ClienteClass';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-cliente',
  templateUrl: './insert-cliente.component.html',
  styleUrls: ['./insert-cliente.component.css']
})
export class InsertClienteComponent implements OnInit {

  cliente:ClienteClass;
  form:FormGroup;

  constructor(
    private service:ClienteService,
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.inicializaForm();
  }

  inicializaForm(){
    this.form = this.fb.group({
      nombre:['',[
        Validators.required
      ]],
      direccion:null,
      telefono:[null,[
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern('[0-9]+')
      ]],
      trabajos:null,
      presupuestos:null,
      comentarios:null,
    });
  }

  get nombre(){return this.form.get('nombre');}
  get direccion(){return this.form.get('direccion');}
  get telefono(){return this.form.get('telefono');}
  get trabajos(){return this.form.get('trabajos');}
  get presupuestos(){return this.form.get('presupuestos');}
  get comentarios(){return this.form.get('comentarios');}

  submitHandler(myForm:FormGroup){
    this.cliente = new ClienteClass(this.form.value);
    this.service.insertCliente(this.cliente).subscribe(
      data => {this.router.navigate(['../clientes']);}
    );
    this.form.reset();
  }
}
