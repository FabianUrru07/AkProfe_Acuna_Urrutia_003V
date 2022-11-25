import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { UserI } from 'src/app/models/models.module';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  datos: UserI = {
    rut: null,
    nombre: null,
    correo: null,
    password: null,
    uid: null,
    perfil: 'alumno'
  };


  constructor(
    private popoverController: PopoverController
  ) {



  }

  ngOnInit() {}

  async openMenu(ev: any) {
    console.log('abrir menu lateral');
    const menu = await this.popoverController.create({
      component: MenuComponent,
      cssClass: 'my-custom-class',
      translucent: true,
      event: ev,
    });
    await menu.present();
  }

}


