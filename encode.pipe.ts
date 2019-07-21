import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe that encodes text based on the given mode
 *
 * @param {string} value - The string the pipe is used on
 */

@Pipe({name: 'encode'})
export class encode implements PipeTransform {
  transform(value: string, mode: string): string {

    switch(mode) {
      case 'URI':
        return encodeURI(value);
        break;

      case 'URIComponent':
        return encodeURIComponent(value);
        break;

      case 'base64':
        return window.btoa(value);
        break;

      default:
        return encodeURI(value);
        break;
    }
  }
}
