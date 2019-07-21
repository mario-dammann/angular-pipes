import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe that decodes text based on the given mode
 *
 * @param {string} value - The string the pipe is used on
 */

@Pipe({name: 'decode'})
export class decode implements PipeTransform {
  transform(value: string, mode: string): string {

    switch(mode) {
      case 'URI':
        return decodeURI(value);
        break;

      case 'URIComponent':
        return decodeURIComponent(value);
        break;

      case 'base64':
        return window.atob(value);
        break;

      default:
        return decodeURI(value);
        break;
    }
  }
}
