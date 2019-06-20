import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe that may return various components of an URL
 *
 * @param {string} value - The string the pipe is used on
 * @param {string} component - determines the component of the URL that is returned
 * @param {string} parameter - used if component = "searchParams" to determine which query parameter should be returned
 */

@Pipe({name: 'url'})
export class url implements PipeTransform {
  transform(value: string, component: string, parameter: string): string {
    var url = new URL(value);

    if (component in url) {
      if (component == 'searchParams') {
        return url[component].get(parameter);
      }
      return url[component];
    }
    return url.href;
  }
}
