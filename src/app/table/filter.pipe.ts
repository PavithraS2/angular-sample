/**
 * @author Pavithra S 
 * @since 2018-03-11
 */
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], text: string): any {
    if (text) {
      return _.filter(items, row => row.firstName.toLowerCase().indexOf(text.toLowerCase()) > -1);
    }
    return items;
  }
}