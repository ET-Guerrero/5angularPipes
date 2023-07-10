import { Component } from '@angular/core';

import { registerLocaleData } from '@angular/common'
import localEs from '@angular/common/locales/es'

registerLocaleData(localEs)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan América';
  nombre2: string = 'pAncHo vILla';
  personajes: string[] = ['Hombre de hierro', 'Hombre araña', 'Lobezno', 'Jotaro'];
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.3456;
  salario: number = 1234.5;
  fecha: Date = new Date();
  videoUrl:string = 'https://www.youtube.com/embed/TFS316SzGFQ'
  activar:boolean = true
  palabraBotonActivar:string = 'Activar'



  idioma:string = 'es'

  heroe = {
    nombre: 'Logan',
    clave: 'Lobezno',
    edad:500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  valorPromesa = new Promise<string>( (resolve)=>{

    setTimeout(() => {
      resolve('llego la data');
    }, 4500);

  }  )

  cambiarIdioma(idioma: string){
    return this.idioma = idioma

  }



}
