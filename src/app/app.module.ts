import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerDineroComponent } from './components/dinero/ver-dinero/ver-dinero.component';
import { PagInicialComponent } from './components/pag-inicial/pag-inicial.component';
import { InsertMovimientoComponent } from './components/movimiento/insert-movimiento/insert-movimiento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ListarMovimientosComponent } from './components/movimiento/listar-movimientos/listar-movimientos.component';
import { MatNativeDateModule } from '@angular/material/core';
import { InsertFacturaComponent } from './components/factura/insert-factura/insert-factura.component';
import { ListarFacturasComponent } from './components/factura/listar-facturas/listar-facturas.component';
import { FacturaDetailsComponent } from './components/factura/factura-details/factura-details.component';
import { UpdateFacturaComponent } from './components/factura/update-factura/update-factura.component';





@NgModule({
  declarations: [
    AppComponent,
    VerDineroComponent,
    PagInicialComponent,
    InsertMovimientoComponent,
    ListarMovimientosComponent,
    InsertFacturaComponent,
    ListarFacturasComponent,
    FacturaDetailsComponent,
    UpdateFacturaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
