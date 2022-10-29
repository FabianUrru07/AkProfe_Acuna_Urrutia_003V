import { Component, NgModule, ElementRef, ViewChild, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { IonModal } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';




interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'mydb',
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    }),
  ],
})
export class AppComponent implements OnInit {




  constructor(
    private authService: AuthService,
    private menuController: MenuController,
    private router: Router) {
  }



  ngOnInit() {
    this.isModalOpen = true;


  }

  componentes: Componente[] = [
    {
      icon: 'home-outline',
      name: 'Home',
      redirecTo: '/bienvenido'
    },

    {
      icon: 'camera-outline',
      name: 'Tomar-Asistencia',
      redirecTo: '/toma-asistencia'
    },
    {
      icon: 'color-wand-outline',
      name: 'API',
      redirecTo: '/clima'
    },
    {
      icon: 'log-out-outline',
      name: 'Logout',
      redirecTo: '/login'
    },
  ];
  @ViewChild('map') mapView: ElementRef;
  @ViewChild(IonModal) modal: IonModal;
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }



  mostrarMenu() {
    this.menuController.open('first');
  }

  async showCurrentPosition() {
    // todo
  }

  async logout() {
    this.isModalOpen = false;
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }



}
