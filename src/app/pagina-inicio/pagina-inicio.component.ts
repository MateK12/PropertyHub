import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.less']
})
export class PaginaInicioComponent {
  constructor(private router: Router) { }

  IrInicioSesion() {
    this.router.navigate(["/inicioSesion"]);
  }
}
