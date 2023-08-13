import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: "app", pathMatch: "full" },
  { path: 'inicio', component: LayoutComponent },
  { path: 'inicioSesion', component: InicioSesionComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: '**', redirectTo: "inicio", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
