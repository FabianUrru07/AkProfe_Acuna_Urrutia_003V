import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Datos {
  rutAlumno: number;
  nomAlumno: string;
  correoAlumno: string;
  celularAlumno: number;
  sedeAlumno: string;
  passAlumno: string;
}

const ITEMS_KEY = 'my-datos';

@Injectable({
  providedIn: 'root',
})
export class ServicedatosService {
  private _storage: Storage;

  constructor(private storage: Storage) {
    this.init();
  }
  //definimos en un método la creación del almacenamiento
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async addDatos(dato: Datos): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((datos: Datos[]) => {
      if (datos) {
        datos.push(dato);
        return this.storage.set(ITEMS_KEY, datos);
      } else {
        return this.storage.set(ITEMS_KEY, [dato]);
      }
    });
  }

  getDatos(): Promise<Datos[]> {
    return this.storage.get(ITEMS_KEY);
  }

  async updateDatos(dato: Datos): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((datos: Datos[]) => {
      if (!datos || datos.length === 0) {
        return null;
      }
      let newDato: Datos[] = [];
      for (let i of datos) {
        if (i.rutAlumno === dato.rutAlumno) {
          newDato.push(dato);
        } else {
          newDato.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newDato);
    });
  }

  async deleteDatos(id: number): Promise<Datos> {
    return this.storage.get(ITEMS_KEY).then((datos: Datos[]) => {
      if (!datos || datos.length === 0) {
        return null;
      }
      let toKeep: Datos[] = [];
      for (let i of datos) {
        if (i.rutAlumno !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}
