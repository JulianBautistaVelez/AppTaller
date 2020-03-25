import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturaDetailsComponent } from './components/factura/factura-details/factura-details.component';
import { PagInicialComponent } from './components/pag-inicial/pag-inicial.component';
import { InsertFacturaComponent } from './components/factura/insert-factura/insert-factura.component';
import { UpdateFacturaComponent } from './components/factura/update-factura/update-factura.component';
import { InsertMovimientoComponent } from './components/movimiento/insert-movimiento/insert-movimiento.component';
import { ListarFacturasComponent } from './components/factura/listar-facturas/listar-facturas.component';
import { ListarMovimientosComponent } from './components/movimiento/listar-movimientos/listar-movimientos.component';
import { InsertClienteComponent } from './components/cliente/insert-cliente/insert-cliente.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { UpdateClienteComponent } from './components/cliente/update-cliente/update-cliente.component';
import { InsertTelaComponent } from './components/tela/insert-tela/insert-tela.component';
import { ListarTelasComponent } from './components/tela/listar-telas/listar-telas.component';
import { UpdateTelaComponent } from './components/tela/update-tela/update-tela.component';


const routes: Routes = [
  { path: "", component: PagInicialComponent},
  { path: 'facturas', component: ListarFacturasComponent},
  { path: 'facturas/insert', component: InsertFacturaComponent},
  { path: 'facturas/:facturaId', component: FacturaDetailsComponent},
  { path: 'facturas/edit/:facturaId', component: UpdateFacturaComponent},
  { path: 'movimientos', component: ListarMovimientosComponent},
  { path: 'movimiento/insert/:tipo', component: InsertMovimientoComponent},
  { path: 'clientes', component: ListarClientesComponent},
  { path: 'clientes/insert', component: InsertClienteComponent},
  { path: 'clientes/update/:clienteId', component: UpdateClienteComponent},
  { path: 'telas', component: ListarTelasComponent},
  { path: 'telas/insert', component: InsertTelaComponent},
  { path: 'telas/update/:telaId', component: UpdateTelaComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
