import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
/* precisa implementar uma classe
para sobrescrever o metodo transform dessa classe
*/
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
  /* split quebra por espaço */
    let values = value.split(' ');
    let resul = '';

    for(let v of values){
      resul+=this.capitalize(v)+ ' ';
    }
    return resul;
  }

  capitalize(value:string){
    return value.substr(0,1).toLocaleUpperCase() +
    value.substr(1).toLowerCase();
  }

}
