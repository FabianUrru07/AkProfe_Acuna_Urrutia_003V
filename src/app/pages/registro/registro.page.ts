import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { InteractionService } from '../../services/interaction.service';
import { Router } from '@angular/router';
import { UserI } from 'src/app/models/models.module';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  datos: UserI = {
    rut: null,
    nombre: null,
    correo: null,
    password: null,
    uid: null,
    perfil: 'alumno'
  };

  constructor(private auth: AuthService,
              private firestore: FirestoreService,
              private interaction: InteractionService,
              private router: Router,) { }

  ngOnInit() {}

  async registrar(){
    this.interaction.presentLoading('registrando...');
    console.log('datos -> ', this.datos);
    const res = await this.auth.registrarUser(this.datos).catch( error => {
      this.interaction.closeLoading();
      this.interaction.presentToast('error');
      console.log('error');
    });
    if (res) {
      console.log('exito al crear al usuario');
      const path = 'Usuarios';
      const id = res.user.uid;
      this.datos.uid = id;
      this.datos.password = null;
      await this.firestore.createDoc(this.datos, path, id);
      this.interaction.closeLoading();
      this.interaction.presentToast('registrado con exito');
      this.router.navigate(['/login']);
    }
  }

}
