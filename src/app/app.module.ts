import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { InsertClienteComponent } from './components/cliente/insert-cliente/insert-cliente.component';
import { ListarClientesComponent } from './components/cliente/listar-clientes/listar-clientes.component';
import { UpdateClienteComponent } from './components/cliente/update-cliente/update-cliente.component';
import { ListarTelasComponent } from './components/tela/listar-telas/listar-telas.component';
import { InsertTelaComponent } from './components/tela/insert-tela/insert-tela.component';
import { UpdateTelaComponent } from './components/tela/update-tela/update-tela.component';
import { LiquidezChartComponent } from './components/charts/liquidez-chart/liquidez-chart.component';
import { GastosIngresosChartComponent } from './components/charts/gastos-ingresos-chart/gastos-ingresos-chart.component';
import { TransferDineroComponent } from './components/dinero/transfer-dinero/transfer-dinero.component';
import { MovimientoDetailsComponent } from './components/movimiento/movimiento-details/movimiento-details.component';
import { LoginComponent } from './components/login/login.component';
import { JwtInterceptor } from './helpers/jwt-interceptor';
import { ErrorInterceptor } from './helpers/error-interceptor';
import { BotonComponent } from './components/boton/boton.component';


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
    MenuPrincipalComponent,
    InsertClienteComponent,
    ListarClientesComponent,
    UpdateClienteComponent,
    ListarTelasComponent,
    InsertTelaComponent,
    UpdateTelaComponent,
    LiquidezChartComponent,
    GastosIngresosChartComponent,
    TransferDineroComponent,
    MovimientoDetailsComponent,
    LoginComponent,
    BotonComponent,
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
    MatNativeDateModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
