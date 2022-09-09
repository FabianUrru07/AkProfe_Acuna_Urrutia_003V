import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async Saludo() {
    const alert = await this.alertController.create({
      header: '¡Bienvenido a AkProfe!',
      message: 'Nos alegra que este aquí. AkProfe es una aplicación donde puede registrar tu asistencia de una forma fácil y eficaz, navega por el menú para ver las diferentes funciones de esta aplicación',
      buttons: ['OK'],
    });

    await alert.present();
  }

  usuario={
    nombre:'',
    password:'',
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.usuario);
  }

}
