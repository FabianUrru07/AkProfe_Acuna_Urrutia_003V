import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-toma-asistencia',
  templateUrl: './toma-asistencia.page.html',
  styleUrls: ['./toma-asistencia.page.scss'],
})
export class TomaAsistenciaPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }
  
  mostrarMenu(){
    this.menuController.open('first');


  }
}
