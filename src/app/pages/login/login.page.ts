import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { InteractionService } from '../../services/interaction.service';
import { UserI } from 'src/app/models/models.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  datos: UserI = {
    rut: null,
    nombre: null,
    correo: null,
    password: null,
    uid: null,
    perfil: 'alumno'
  };

  credenciales = {
    correo: null,
    password: null,
    nombre: null
  };
  constructor(private auth: AuthService,
              private interaction: InteractionService,
              private router: Router) { }

  ngOnInit() {}

  async login() {
    await this.interaction.presentLoading('Ingresando....');
    console.log('credenciales -> ', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(error => {
      console.log('error');
      this.interaction.closeLoading();
      this.interaction.presentToast('Usuario o contraseña invalido');
    });
    if (res) {
      console.log('res -> ', res);
      //localStorage.setItem('nombre',res);
      this.interaction.closeLoading();
      this.interaction.presentToast('Ingresado con exito');
      this.router.navigate(['/inicio']);
    }
  }


}
