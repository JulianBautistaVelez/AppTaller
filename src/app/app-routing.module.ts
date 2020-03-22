import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturaDetailsComponent } from './components/factura/factura-details/factura-details.component';
import { PagInicialComponent } from './components/pag-inicial/pag-inicial.component';
import { InsertFacturaComponent } from './components/factura/insert-factura/insert-factura.component';
import { UpdateFacturaComponent } from './components/factura/update-factura/update-factura.component';


const routes: Routes = [
  { path: "", component: PagInicialComponent},
  { path: 'facturas/:facturaId', component: FacturaDetailsComponent},
  { path: 'facturas/edit/:facturaId', component: UpdateFacturaComponent},
  { path: 'facturas/insert', component: InsertFacturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
