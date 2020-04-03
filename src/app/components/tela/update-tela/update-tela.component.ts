import { Component, OnInit } from '@angular/core';
import { TelaClass } from 'src/app/model/tela/TelaClass';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tiposTela } from 'src/app/model/shared/TiposTela';
import { proveedoresTela } from 'src/app/model/shared/ProveedoresTela';
import { TelaService } from 'src/app/services/tela/tela.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-tela',
  templateUrl: './update-tela.component.html',
  styleUrls: ['./update-tela.component.css']
})
export class UpdateTelaComponent implements OnInit {

  id:String;
  tela:TelaClass;
  form:FormGroup;
  tiposTela = tiposTela;
  proveedoresTela = proveedoresTela;

  constructor(
    private service:TelaService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getRouteID();
    this.getTelaById();
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

  getRouteID(){
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('telaId');
      }
    )
  }

  getTelaById(){
    this.service.getTelaById(this.id).subscribe(
      (data:TelaClass) => {
        this.form.patchValue(data);
      }
    )
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

  updateTela(){
    this.tela = new TelaClass(this.form.value);
    this.service.updateTela(this.tela, this.id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['../telas']);
      }
    );
  }

  deleteTela(){
    this.service.deleteTela(this.id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['../telas']);
      }
    )
  }

}
