import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean): string {

    // let value2 = value.toLocaleLowerCase().split(' ').map( x => x[0].toUpperCase() + x.substring(1)).join(' ')
    // let value3 = value2.map( x => x[0].toUpperCase() + x.substring(1)).join(' ')

    // console.log(value3);
    if (todas) {

      value = value.toLocaleLowerCase().split(' ').map( x => x[0].toUpperCase() + x.substring(1)).join(' ')
      return value;

    } else {

      value = value.toLocaleLowerCase()
      value = value[0].toLocaleUpperCase() + value.substring(1)
      return value

    }


  }

}
