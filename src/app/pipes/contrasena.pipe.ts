import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean): string {

    if (activar) {
      let answer = ''
      for (let i = 0; i < value.length ; i++) {
        answer += '*'
      }
      return answer
    } else {
      return value
    }



  }

}
