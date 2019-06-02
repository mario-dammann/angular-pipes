import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe that transforms a text to leetspeak
 *
 * @param {string} value - The string the pipe is used on
 */

@Pipe({name: 'leet'})
export class leet implements PipeTransform {
  transform(value: string): string {
      var characterMap = {
          'a': '4',
          'b': '8',
          'e': '3',
          'g': '6',
          'l': '1',
          'o': '0',
          's': '5',
          't': '7',
          'æ': '43',
          'ø': '03',
          'å': '44'
      };

      value = value || '';
      value = value.replace(/cks/g, 'x');

      for (var letter in characterMap) {
          if (characterMap.hasOwnProperty(letter)) {
              value = value.replace(new RegExp(letter, 'g'), characterMap[letter]);
          }
      }

      return value.toUpperCase();
  }
}
