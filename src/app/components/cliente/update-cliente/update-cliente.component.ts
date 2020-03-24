import { Component, OnInit } from '@angular/core';
import { ClienteClass } from 'src/app/model/cliente/ClienteClass';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {

  cliente:ClienteClass;
  form:FormGroup;
  id:String;
  
  constructor(
    private service:ClienteService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inicializaForm();
    this.getRouteID();
    this.getClienteById();
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

  getRouteID(){
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('clienteId');
        console.log(params)
      }
    )
  }

  get nombre(){return this.form.get('nombre');}
  get direccion(){return this.form.get('direccion');}
  get telefono(){return this.form.get('telefono');}
  get trabajos(){return this.form.get('trabajos');}
  get presupuestos(){return this.form.get('presupuestos');}
  get comentarios(){return this.form.get('comentarios');}

  submitHandler(myForm:FormGroup){
    this.cliente = new ClienteClass(this.form.value);
    this.service.updateCliente(this.cliente, this.id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['../facturas']);
      }
    );
  }

  getClienteById(){
    this.service.getClienteById(this.id).subscribe(
      (data:ClienteClass) => {
        this.form.patchValue(data);
        this.cliente = data;
      }
    )
  }

}
