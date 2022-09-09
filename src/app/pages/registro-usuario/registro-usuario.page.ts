import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  usuario={
    nombre:'',
    rut:'',
    email:'',
    celular:'',
    sede:'',
    password:'',
    password2:'',
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.usuario);
  }

  async Saludo() {
    const alert = await this.alertController.create({
      header: '¡Registro Exitoso!',
      message: 'Usted se ha registrado correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
