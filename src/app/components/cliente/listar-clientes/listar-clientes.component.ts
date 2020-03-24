import { Component, OnInit } from '@angular/core';
import { ClienteClass } from 'src/app/model/cliente/ClienteClass';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes:ClienteClass[];

  constructor(private service:ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.service.getClientes().subscribe((data:ClienteClass[]) =>{
      this.clientes = data;
    })
  }

}
