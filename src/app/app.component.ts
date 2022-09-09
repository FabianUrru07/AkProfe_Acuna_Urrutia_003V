import { Component } from '@angular/core';

interface Componente{

  icon: string;
  name: string;
  redirecTo: string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [
    {
      icon: 'home-outline',
      name: 'Home',
      redirecTo: '/bienvenido'
    },

    {
      icon: 'checkmark-done-outline',
      name: 'Toma Asistencia',
      redirecTo: '/toma-asistencia'
    },

    {
      icon: 'camera-outline',
      name: 'Registrar Asistencia',
      redirecTo: '/registrar-asistencia'
    },

    {
      icon: 'log-out-outline',
      name: 'Salir',
      redirecTo: '/inicio'
    },
  

  ];
}
