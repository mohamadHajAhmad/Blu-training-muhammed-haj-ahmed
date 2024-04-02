import { Pipe, PipeTransform } from '@angular/core';
import { Options } from './options';

@Pipe({
  name: 'preRender'
})
export class PreRenderPipe implements PipeTransform {

  camelize(str: string): string {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}
  transform(value: string, option : string): string {
    switch(option) {
      case 'uppercase' :
        return value.toLocaleUpperCase();
      case 'lowercase' :
        return value.toLocaleLowerCase()
      case 'camelcase' :
        return this.camelize(value);
      default :
        return value
    }
  }

}
