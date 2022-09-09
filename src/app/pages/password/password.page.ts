import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  usuario={
    recuperar:'',
    
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.usuario);
  }

  async Saludo() {
    const alert = await this.alertController.create({
      header: '¡Correo electrónico enviado!',
      message: 'Se ha enviado un correo electrónico con instrucciones sobre como restablecer su contraseña',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
