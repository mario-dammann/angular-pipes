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

    switch (component) {
      case 'href':
        return url.href;
        break;

      case 'origin':
        return url.origin;
        break;

      case 'protocol':
        return url.protocol;
        break;

      case 'username':
        return url.username;
        break;

      case 'password':
        return url.password;
        break;

      case 'hostname':
        return url.hostname;
        break;

      case 'host':
        return url.host;
        break;

      case 'port':
        return url.port;
        break;

      case 'pathname':
        return url.pathname;
        break;

      case 'search':
        return url.search;
        break;

      case 'searchParams':
        return url.searchParams.get(parameter);
        break;

      case 'hash':
        return url.hash;
        break;

      default:
        return url.href;
        break;
    }
  }
}
