import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';


import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { LayoutComponent } from './layout/layout.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NavbarComponent } from './dashboard/components/navbar/navbar.component';
import { TableComponent } from './dashboard/components/table/table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalComponent } from './dashboard/components/navbar/modal/modal.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ModalEditComponent } from './dashboard/components/table/modal-edit/modal-edit.component';
import { ModalDeleteComponent } from './dashboard/components/table/modal-delete/modal-delete.component';
import { ReceiptComponent } from './dashboard/components/navbar/receipt/receipt.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicioComponent,
    InicioSesionComponent,
    LayoutComponent,
    DashboardComponent,
    NavbarComponent,
    TableComponent,
    ModalComponent,
    ModalEditComponent,
    ModalDeleteComponent,
    ReceiptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzCarouselModule,
    ReactiveFormsModule,
    NzFormModule,
    NzMenuModule,
    NzTableModule,
    NzBadgeModule,
    NzDropDownModule,
    NzDividerModule,
    NzModalModule,
    NzSwitchModule,
    NzSelectModule,
    NzDatePickerModule,
    NzIconModule,
    NzListModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
